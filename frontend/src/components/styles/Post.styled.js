import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: auto;
  border-radius: 32px;
  align-items: start;
`;

export const Img = styled.img`
  width: 480px;
  height: 310px;
  border-radius: 25px;
`;

export const Card = styled.div`
  text-align: start;
  margin-top: 60px;
  cursor: pointer;

  h1 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
  }
`;

export const ImgBox = styled.div`
  padding-right: 20px;
`;

export const Content = styled.div`
  width: 470px;
  height: 138px;
  max-height: 140px;
  box-sizing: border-box;
  overflow: hidden;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

// this is for the top of the section of the first blog post.
// for the first Post of the section...
export const First_Post = styled.div`
  height: auto;
`;

export const TopImg = styled.img`
  width: 800px;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;

  height: auto;
`;

export const Box = styled.div`
  display: flex;
  h1 {
    text-align: start;
    font-size: 40px;
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    margin-right: 20px;
    color: #fff;
    font-size: 18px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

// list section.
export const ListContainer = styled.div`
  font-size: 30px;
  margin: 50px 20%;
  display: flex;
  img {
    width: 430px;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

  h1 {
    font-size: 32px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    font-size: 18px;
  }

  @media (max-width: 1600px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 1415px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 1300px) {
    display: block;
    h1 p {
      text-align: start;
    }
    img {
      text-align: center;
      width: 600px;
    }
  }

  @media (max-width: 942px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 400px;
    }

    h1 {
      text-align: start;
      font-size: 22px;
    }
    p {
      text-align: start;
      font-size: 12px;
    }
  }
`;

export const ListContent = styled.div`
  margin-left: 20px;
  overflow: hidden;

  @media (max-width: 1300px) {
    text-align: center;
    width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 942px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 400px;
  }
`;

export const ImgWrapper = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: 1300px) and (min-width: 300px) {
    text-align: center;
  }
`;
