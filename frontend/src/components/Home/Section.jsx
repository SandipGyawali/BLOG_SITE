/* eslint-disable react/prop-types */
import { PostWrapper } from "../styles/Home.styled";
import FirstPost from "../Post/FirstPost";
import { PostList } from "../styles/Home.styled";
import { v4 as uuid } from "uuid";
import Post from "../Post/Post";

function Section({ data }) {
  return (
    <>
      <PostWrapper>
        <FirstPost blog={data[1]} />
        {/* // <Post blog={data.blogs[0]} /> */}
        <PostList>
          {data.slice(2, 5).map((blog) => (
            <Post blog={blog} key={uuid()} />
          ))}
        </PostList>
        <hr />
      </PostWrapper>
    </>
  );
}

export default Section;
