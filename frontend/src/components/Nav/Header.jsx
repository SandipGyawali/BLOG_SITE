import {
  Logo,
  NavBar,
  L_Wrapper,
  List,
  LogOutButton,
} from "../styles/Header.styled";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { fetchBlogs } from "../Home/Home";

export const Header = () => {
  const { logOutInfo } = useContext(UserContext);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, [logout]);

  // this function handles all the logout functionality..
  function handleLogOut() {
    localStorage.removeItem("token");
    logOutInfo();
  }

  return (
    <NavBar>
      <Logo>
        <Link to="/">QuillQuest</Link>
      </Logo>
      <L_Wrapper>
        <List>
          <Link to="/blog">CreateBlog</Link>
        </List>
        <List>
          <Link to="/finance">Finance</Link>
        </List>
        <List>
          <Link to="/travel">Travel</Link>
        </List>
        <List>
          <Link to="/fitness">Fitness</Link>
        </List>
        {/* based on the status of the user that is logged in or not the header is shown */}
        {!localStorage.getItem("token") ? (
          <>
            <List>
              <Link to="/signup" className="signup">
                SignUp
              </Link>
            </List>
            <List>
              <Link to="/login" className="login">
                Login
              </Link>
            </List>
          </>
        ) : (
          <List>
            <LogOutButton
              onClick={() => {
                setLogout(!logout);
                handleLogOut();
              }}
            >
              LogOut
            </LogOutButton>
          </List>
        )}

        <Toggle />
      </L_Wrapper>
    </NavBar>
  );
};

export default Header;
