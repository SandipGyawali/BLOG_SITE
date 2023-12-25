/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  function logOutInfo() {
    setUserInfo(null);
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, logOutInfo }}>
      {children}
    </UserContext.Provider>
  );
}
