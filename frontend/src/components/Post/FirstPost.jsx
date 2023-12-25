/* eslint-disable react/prop-types */
import { Card } from "../styles/Post.styled";
import { Link } from "react-router-dom";
import { First_Post, TopImg, Box } from "../styles/Post.styled";

function FirstPost({ blog }) {
  return (
    <Card>
      <First_Post>
        <Box>
          <TopImg
            src={`data:${blog.photo.mimetype};base64,${blog.photo.data}`}
            alt="fitness-image"
          />

          <div>
            <h1>
              <Link to={`/singlePost/${blog._id}`}>{blog.title}</Link>
            </h1>
            <p>{blog.summary.slice(0, 1000)}...ReadMore</p>
            <br />
            <p>
              Author:
              {blog.author.username.charAt(0).toUpperCase() +
                blog.author.username.slice(1)}
            </p>
            <p>Category: {blog.category}</p>
          </div>
        </Box>
      </First_Post>
    </Card>
  );
}

export default FirstPost;
