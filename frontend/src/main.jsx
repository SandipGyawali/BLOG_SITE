import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Nav/Header.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { SingleBlogContextProvider } from "./contexts/singleBlog.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      staleTime: 120000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <SingleBlogContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </SingleBlogContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
