import axios from "axios";
import { useQuery } from "react-query";
import { Heading, Title, SubTitle } from "../styles/Home.styled";
import Footer from "../Nav/Footer";
import Section from "./Section";

export async function fetchBlogs() {
  const res = await axios.get("http://localhost:8001/api/user/blogs");
  return res.data;
}

function Home() {
  const { isLoading, error, isError, data } = useQuery("blogs", fetchBlogs);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // const travel = data.blogs.filter((e) => e.category == "travel");
  const fitness = data.blogs.filter((e) => e.category == "fitness");
  const finance = data.blogs.filter((e) => e.category == "finance");
  const travel = data.blogs.filter((e) => e.category == "travel");

  return (
    <>
      <Heading>
        <Title>THE BLOG</Title>
      </Heading>
      {data.error ? (
        <>
          <br />
          <h1>{data.error}</h1>
        </>
      ) : (
        <>
          <SubTitle>Fitness</SubTitle>
          <Section data={fitness} />

          <SubTitle>Travel</SubTitle>
          <Section data={travel} />

          <SubTitle>Finance</SubTitle>
          <Section data={finance} />
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;
