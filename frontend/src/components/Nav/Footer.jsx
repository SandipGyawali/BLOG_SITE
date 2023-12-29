// Footer.js
import {
  FooterContainer,
  SocialIconsContainer,
  CopyrightText,
  FooterLogo,
} from "../styles/Header.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <hr />
      <FooterLogo>QuillQuest</FooterLogo>
      <SocialIconsContainer>
        <i className="fa fa-facebook" />
        <i className="fa fa-twitter" />
        <i className="fa fa-linkedin" />
        <i className="fa fa-instagram" />
      </SocialIconsContainer>
      <CopyrightText>
        &copy; 2023 Your Company. All rights reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
