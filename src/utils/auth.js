export const logout = () => {
  localStorage.removeItem("loggedInUser");
};

export const getLoggedInUser = () => {
  try {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    return data?.email || null;
  } catch {
    return null;
  }
};