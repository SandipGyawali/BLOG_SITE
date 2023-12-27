import { createContext, useState } from "react";

export const SingleBlogContext = createContext({});

export function SingleBlogContextProvider({ children }) {
  const [singleBlog, setSingleBlog] = useState(null);

  function removeSingleBlog() {
    setSingleBlog(null);
  }
  return (
    <SingleBlogContext.Provider
      value={{ singleBlog, setSingleBlog, removeSingleBlog }}
    >
      {children}
    </SingleBlogContext.Provider>
  );
}
