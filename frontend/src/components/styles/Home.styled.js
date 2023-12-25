import styled from "styled-components";

export const Heading = styled.div`
  margin-top: 55px;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-left: 200px;
  margin-right: 200px;
  height: 295px;
`;

export const Title = styled.h1`
  font-size: 243.8px;
  margin-top: 0px;

  @media (max-width: 850px) {
    font-size: 70px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 40px;
  margin: 70px 200px 30px;
`;

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const PostWrapper = styled.div`
  margin: 50px 10% 50px 10%;

  hr {
    margin-top: 20px;
  }
`;
