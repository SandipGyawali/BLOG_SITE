import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Container,
  Content,
  Heading,
  Img,
  Author,
  ModifyBtn,
} from "../styles/SInglePost.styled";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { SingleBlogContext } from "../../contexts/singleBlog";
import { useContext } from "react";

function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSingleBlog } = useContext(SingleBlogContext);

  // fetches the single post according to id from database..
  async function fetchBlog() {
    const res = await axios.get(`http://localhost:8001/api/user/blogs/${id}`);
    return res.data;
  }

  // handle delete method.
  async function handleDeleteBlog() {
    const res = await axios.delete(
      `http://localhost:8001/api/user/blogs/${id}`
    );
    if (res.data.success == true) {
      navigate("/");
    }
  }

  // handle update method.
  async function handleUpdateBlogFetch() {
    const res = await axios.get(`http://localhost:8001/api/user/blogs/${id}`);

    if (res.data.blog.success) {
      setSingleBlog(res.data);
      navigate("/editBlog");
    }
  }

  const { data, error } = useQuery(`blog`, fetchBlog);

  return data ? (
    <Container>
      <div>
        <div>
          <Heading>
            <h1>{data.blog.title}</h1>
            <p>{data.blog.summary}</p>
          </Heading>
          <div>
            <Img
              src={`data:${data.blog.photo.mimetype};base64,${data.blog.photo.data}`}
              alt="image"
            />
          </div>

          <Content>
            <div dangerouslySetInnerHTML={{ __html: data.blog.content }} />
          </Content>
          {/* delete Button */}
          <ModifyBtn>
            <button onClick={handleDeleteBlog}>Delete Blog</button>
            <button onClick={handleUpdateBlogFetch}>Update Blog</button>
          </ModifyBtn>

          <hr />
          <Author>
            <h3>Author: {data.blog.author.username.toUpperCase()}</h3>
            <h4>Email : {data.blog.author.email}</h4>
            <h4>UpdatedAt: {format(data.updatedAt)}</h4>
          </Author>
        </div>
      </div>
      <div></div>
    </Container>
  ) : (
    <h1>{error}</h1>
  );
}

export default SinglePost;
