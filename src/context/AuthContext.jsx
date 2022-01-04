import React from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (children) => {
  
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
