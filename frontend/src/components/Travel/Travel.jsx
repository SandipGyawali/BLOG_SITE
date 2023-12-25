import { fetchBlogs } from "../Home/Home";
import { useQuery } from "react-query";
import List from "../Post/List";
import { v4 as uuid } from "uuid";

function Travel() {
  const { isLoading, error, isError, data } = useQuery("blogs", fetchBlogs);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // filtering the blogs with travel category
  const result = data.blogs.filter((res) => res.category == "travel");
  console.log(result);

  return (
    <div>
      {result.map((list) => (
        <List data={list} key={uuid()} />
      ))}
    </div>
  );
}

export default Travel;
