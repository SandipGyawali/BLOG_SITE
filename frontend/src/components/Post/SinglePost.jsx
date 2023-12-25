import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Container,
  Content,
  Heading,
  Img,
  Author,
} from "../styles/SInglePost.styled";
import { format } from "timeago.js";

function SinglePost() {
  const { id } = useParams();

  // fetches the single post according to id from database..
  async function fetchBlog() {
    const res = await axios.get(`http://localhost:8001/api/user/blogs/${id}`);
    return res.data;
  }

  const { data, error } = useQuery(`blog`, fetchBlog);

  return data ? (
    <Container>
      <div>
        <div>
          <Heading>
            <h1>{data.title}</h1>
            <p>{data.summary}</p>
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
          <hr />
          <Author>
            <h3>Author: {data.blog.author.username.toUpperCase()}</h3>
            <h4>Email : {data.blog.author.email}</h4>
            <h4>UpdatedAt: {format(data.updatedAt)}</h4>
          </Author>
        </div>
      </div>
    </Container>
  ) : (
    <h1>{error}</h1>
  );
}

export default SinglePost;
