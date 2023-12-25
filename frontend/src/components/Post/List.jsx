/* eslint-disable react/prop-types */
import { ListContainer, ListContent, ImgWrapper } from "../styles/Post.styled";
import { Link } from "react-router-dom";

function List({ data }) {
  return (
    <ListContainer>
      <ImgWrapper>
        <img src={`data:${data.photo.mimetype};base64,${data.photo.data}`} />
      </ImgWrapper>
      <ListContent>
        <h1>
          <Link to={`/singlePost/${data._id}`}>{data.title}</Link>
        </h1>
        <p>{data.summary.slice(0, 350)}...ReadMore</p>
      </ListContent>
    </ListContainer>
  );
}

export default List;
