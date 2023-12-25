import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return <Outlet>{children}</Outlet>;
}

export default Layout;
