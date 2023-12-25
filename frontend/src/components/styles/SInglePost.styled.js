import styled from "styled-components";

export const Container = styled.div`
  /* background-color: lightcoral; */
  text-align: start;
  width: 1200px;
  margin: 60px auto 50px auto;
`;

export const Heading = styled.div`
  text-align: center;
  margin: 0 auto;
  /* background-color: green; */

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
    padding: 20px 100px 30px 100px;
  }
`;

export const Img = styled.img`
  width: 1200px;
  height: auto;
  border-top-left-radius: 74px;
  border-bottom-right-radius: 74px;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.5rem;
  word-spacing: 0.1rem;
  h1 {
    font-size: 18px;
  }
  margin-bottom: 50px;
  img {
    max-width: 1200px;
    height: auto;
  }
`;

export const Author = styled.div`
  margin-top: 50px;
`;
