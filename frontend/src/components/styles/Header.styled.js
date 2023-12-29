import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  position: relative;
  width: 100%;
  height: 70px;
  color: #fff;
  background-color: #090d1f;
  color: #090d1f;
  position: sticky;
  top: 0;
  width: 100%;

  @media (max-width: 850px) {
    display: block;
    height: auto;
  }

  @media (max-width: 450px) {
    height: auto;
    padding: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 112px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 850px) {
    margin-bottom: 20px;
    padding-left: 0px;
  }

  @media (max-width: 450px) {
    margin-bottom: 15px;
    padding-top: 10px;
  }
`;

export const L_Wrapper = styled.div`
  display: flex;
  padding-right: 112px;
  align-items: center;

  @media (max-width: 850px) {
    justify-content: center;
    padding-right: 0px;
  }

  @media (max-width: 450px) {
    padding-right: 0px;
    padding-right: 0;
    display: block;
    text-align: center;
  }
`;

export const List = styled.div`
  padding: 10px;
  font-size: 18px;
  &:hover {
    border-bottom: 1px solid #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const ToggleBtn = styled.button`
  margin-left: 15px;
  width: 50px;
  height: 40px;
  background-color: #fff7d4;
  border: 2px solid #fff7d4;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 640px) {
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

// this is for the footer section..

export const FooterContainer = styled.footer`
  background-color: #090d1f;
  color: #fff;
  padding: 30px 0;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  i {
    font-size: 24px;
    color: #fff;
    margin: 0 10px;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #61dafb; /* Change to your preferred hover color */
    }
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const FooterLogo = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;
