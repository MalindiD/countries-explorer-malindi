// src/utils/auth.js
export const logout = () => {
    localStorage.removeItem("loggedInUser");
  };
  
  export const getLoggedInUser = () => {
    return localStorage.getItem("loggedInUser");
  };
  