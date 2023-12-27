import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  StyledForm,
  Label,
  Input,
  TextArea,
  CustomEditor,
  UploadBtn,
  BtnWrapper,
  Select,
} from "../styles/Blog.styled.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SingleBlogContext } from "../../contexts/singleBlog.jsx";

// module for ReactQuill text editor..
const modules = {
  toolbar: [
    [{ script: "sub" }, { script: "super" }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
  ],
};

const BlogCategory = Object.freeze(["travel", "fitness", "finance"]);

function EditBlogForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Select Category");
  const navigate = useNavigate();
  const { singleBlog } = useContext(SingleBlogContext);

  // useEffect for the file.
  useEffect(() => {
    if (singleBlog != null && singleBlog.blog.photo) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTitle(singleBlog.blog.title);
      setSummary(singleBlog.blog.summary);
      setCategory(singleBlog.blog.category);
      setContent(singleBlog.blog.content);
    }
  }, [singleBlog]);

  let id;
  if (singleBlog) {
    id = singleBlog.blog._id;
  }

  // success toast.
  const notify = () => toast.success("Updated Successfully");
  const errorNotify = () => toast.error("All field Required");

  // submit the blog created by the user.
  async function submitBlog(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    formData.append("category", category);

    // getting the token from the local storage
    const token = localStorage.getItem("token");

    // send the request with headers to the backend..
    const res = await axios.patch(
      `http://localhost:8001/api/user/blogs/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    // navigate to the login page..
    if (res.data.error == "login first") {
      navigate("/login");
      return;
    }

    // if any field is empty then..
    if (res.data.err != null) {
      errorNotify();
      return;
    }

    // if successful then.
    if (res.data.success) {
      notify();
      // set time out to show the toast message
      setTimeout(() => {
        navigate(`/singlePost/${res.data._id}`);
      }, 3000);
    }
  }

  function cancelSubmit(e) {
    e.preventDefault();
  }

  return (
    <StyledForm
      encType="multipart/form-data"
      onSubmit={submitBlog}
      method="POST"
    >
      <ToastContainer />
      <h1>What going in you mind ?</h1>

      <Label>Enter title:</Label>
      <Input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <Label>Summary:</Label>
      <TextArea
        type="text"
        value={summary}
        name="summary"
        onChange={(e) => setSummary(e.target.value)}
      />

      <Label>Assign a Category:</Label>
      <Select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      >
        <option disabled>Select Category</option>
        {BlogCategory.map((categ) => (
          <option value={categ} key={uuid()}>
            {categ.charAt(0).toUpperCase() + categ.slice(1)}
          </option>
        ))}
      </Select>

      <Label>Post Content:</Label>
      <CustomEditor>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          style={{
            height: "450px",
          }}
        />
      </CustomEditor>

      <BtnWrapper>
        <UploadBtn onClick={cancelSubmit}>Cancel</UploadBtn>
        <UploadBtn type="submit">Upload</UploadBtn>
      </BtnWrapper>
    </StyledForm>
  );
}

export default EditBlogForm;
