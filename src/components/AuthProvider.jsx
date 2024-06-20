import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children, isSingedIn }) {
  console.log(AuthContext);

  const [user] = useState(isSingedIn ? { name: "John Doe" } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
