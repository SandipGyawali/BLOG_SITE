const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel.js");
const User = require("../models/usersModel.js");

// convert the binary data to the base64 format
function imageBase64(data) {
  return Buffer.from(data).toString("base64");
}

async function handleBlogPost(req, res) {
  const { title, summary, content, category } = req.body;
  const { id } = req.user;
  try {
    const { mimetype, size, buffer, originalname } = req.file;
    if (!category || !title || !summary || !content || !mimetype) {
      return res.json({ err: "All field is mandatory to be filled" });
    }

    const blog = await Blog.create({
      title,
      summary,
      photo: {
        pic_name: originalname,
        mimetype,
        size,
        data: buffer,
      },
      content,
      author: id,
      category,
    });

    await User.findByIdAndUpdate({ _id: id }, { $push: { blogs: blog._id } });
  } catch (err) {
    return res.json({ err: "All field with image is mandatory to be filled." });
  }

  res.json({ msg: "successfully created", success: true });
}

// handle all the fetching of the blogs..
async function getBlogs(req, res) {
  const all_blogs = await Blog.find({});
  if (!all_blogs || all_blogs.length === 0) {
    return res.json({ error: "Couldn't find the blogs" });
  }

  // convert the binary image to string type and also getting the author
  const blogs = await Promise.all(
    all_blogs.map(async function (blog) {
      const { _doc: rest } = blog;
      const { author } = blog;

      // getting the author of the blog post..
      const user_author = await User.findOne({ _id: author }).select(
        "-password"
      );

      const base64Data = imageBase64(blog.photo.data);
      // Buffer.from(blog.photo.data).toString("base64");
      rest.photo.data = base64Data;
      rest.author = user_author;
      return rest;
    })
  );
  return res.json({ blogs });
}

// returns the single blog page based on the id provided..
async function getSingleBlog(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.json({ msg: "Couldn't get the Page" });
  }
  const blog = await Blog.findOne({ _id: id }).select("-password");

  if (!blog) {
    return res.json({ err: "Some error occurred" });
  }

  // due to the immutability reason for the base64
  // data is not converted so we destructure it

  const { _doc: rest } = blog;

  // convert the binary image data to base64 data.
  const base64Data = imageBase64(rest.photo.data);
  // Buffer.from(rest.photo.data).toString("base64");

  // change the binary data to the base64..
  rest.photo.data = base64Data;

  // console.log(blog);
  // get the author return as json form
  const author = await User.findById(rest.author).select("-password");
  // overrides the author key to the value of the actual author data.
  rest.author = author;
  rest.success = true;

  return res.json({ blog: { ...rest } });
}

// remove the single blog post + reference to the user.
async function removeBlog(req, res) {
  const { id } = req.params;

  try {
    const findBlog = await Blog.findById(id);
    if (findBlog) {
      await Blog.findByIdAndDelete(id);
      await User.updateOne(
        { blogs: findBlog._id },
        { $pull: { blogs: findBlog._id } }
      );
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ msg: "Blog not found", success: false });
  }
  res.json({ msg: "Successfully deleted", success: true });
}

async function updateBlog(req, res) {
  const { id } = req.params;
  const { title, summary, content } = req.body;

  // check for the field whether they are empty of not.
  if (!title && !summary && !content) {
    return res.json({ err: true });
  }

  // find the blog with the specific id in the database.
  const blog = await Blog.findById({ _id: id });
  // check whether the blog exists or not .
  if (!blog) {
    return res.json({
      msg: "The blog doesn't exist",
      err: true,
    });
  }
  // add the success key value for checking in the frontend.
  const updatedBlog = { ...blog._doc, success: true };
  updatedBlog.title = title;
  updatedBlog.summary = summary;
  updatedBlog.content = content;

  try {
    // update the blog
    await Blog.updateOne(blog, updatedBlog);
  } catch (err) {
    console.log(err.message);
  }

  res.json(updatedBlog);
}

module.exports = {
  handleBlogPost,
  getBlogs,
  getSingleBlog,
  removeBlog,
  updateBlog,
};
