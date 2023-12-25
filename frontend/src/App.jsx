import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Login/SignUp";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import BlogForm from "./components/Blog/BlogForm";
import SinglePost from "./components/Post/SinglePost";
import Finance from "./components/Finance/Finance";
import Fitness from "./components/Fitness/Fitness";
import Travel from "./components/Travel/Travel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<BlogForm />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/singlePost/:id" element={<SinglePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
