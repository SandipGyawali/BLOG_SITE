import axios from "axios";
import { useState } from "react";
import {
  Container,
  Quote,
  Box,
  Form,
  LoginButton,
  GoogleButton,
  Error,
} from "../styles/Login.styled.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // state for the login form data..
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  const navigate = useNavigate();

  // handles the form submit data..
  async function handleFormSubmit(event) {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:8001/api/user/signup",
      formData
    );

    if (res.data.error) {
      setError((prev) => {
        return {
          ...prev,
          status: true,
          msg: res.data.errorMsg,
        };
      });
      return;
    }
    if (res.data.status == "ok") {
      navigate("/login");
    }
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
              <label>UserName</label>
              <input
                type="text"
                placeholder="Enter your Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
              <br />
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <br />
              <label>Password</label>
              <input
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

            {error.status ? (
              <Error>
                <p>{error.msg}</p>
              </Error>
            ) : (
              ""
            )}

            <div>
              <LoginButton type="submit">SignUp</LoginButton>
              <p>Or Sign in with</p>
              <GoogleButton>
                <img src="../../../google.png" alt="" />
                SignUp with Google
              </GoogleButton>
            </div>
          </Form>
        </Box>
      </div>
    </Container>
  );
}

export default SignUp;
