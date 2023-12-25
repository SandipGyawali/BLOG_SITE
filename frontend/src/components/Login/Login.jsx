import axios from "axios";
import { useState } from "react";
import {
  Container,
  Quote,
  Box,
  Form,
  GoogleButton,
  LoginButton,
  Error,
} from "../styles/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Login() {
  // state for the login form data..
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    status: true,
    msg: "",
  });
  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  // handles the form submit data..
  async function handleFormSubmit(event) {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:8001/api/user/login",
      formData
    );

    // if any error occurred then
    if ("errorMsg" in res.data) {
      setError((prev) => {
        return {
          ...prev,
          status: true,
          msg: res.data.errorMsg,
        };
      });
      return;
    }
    // sets the user_context with the userId which helps in login the user..
    setUserInfo(res.data.user);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    // if (res.data.status == "ok") {
    //   navigate("/");
    // }
  }
  return (
    <Container>
      <div>
        <Box>
          <Quote>
            <h1>Welcome</h1>
            <p>Make Your Blogging Journey Special</p>
          </Quote>

          <Form method="POST" onSubmit={handleFormSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="e"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />

              <label>Password</label>
              <input
                name="p"
                type="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            {/* if error then for message */}
            {error.status ? (
              <Error>
                <p name="err_txt">{error.msg}</p>
              </Error>
            ) : (
              ""
            )}

            <div>
              <LoginButton type="submit">Login</LoginButton>
              <p>Or Sign in with</p>
              <GoogleButton>
                <img src="../../../google.png" alt="" />
                SignUp with Google
              </GoogleButton>
            </div>
          </Form>

          <div>
            <p>
              Don't have an account ? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default Login;
