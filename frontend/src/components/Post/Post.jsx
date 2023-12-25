/* eslint-disable react/prop-types */
import { Wrapper, Img, Card, ImgBox, Content } from "../styles/Post.styled";
import { Link } from "react-router-dom";

function Post({ blog }) {
  return (
    <Card>
      <Wrapper>
        <ImgBox>
          <Img
            src={`data:${blog.photo.mimetype};base64,${blog.photo.data}`}
            alt=""
          />
        </ImgBox>

        <Content>
          <div>
            <h1>
              <Link to={`/singlePost/${blog._id}`}>{blog.title}</Link>
            </h1>
            <p>{blog.summary.slice(0, 100)}...ReadMore</p>
          </div>
        </Content>
      </Wrapper>
    </Card>
  );
}

export default Post;
