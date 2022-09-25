import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const userLogSave = (login) => {
    localStorage.setItem("username", login);
  };

  const getUserLogin = () => {
    return localStorage.getItem("username");
  };

  const removeUserLogin = () => {
    localStorage.removeItem("username");
  };

  const func = {
    removeUserLogin,
    getUserLogin,
    userLogSave,
  };
  return (
    <UserContext.Provider value={func}>
      {children}
    </UserContext.Provider>
  );
};
