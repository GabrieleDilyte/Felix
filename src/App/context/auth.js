import { createContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext();
const USER_KEY = "auth/token";

function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)));
  const [error, setError] = useState(null);

  const logout = () => setUser(null);

  const login = useCallback(
    async (user) => {
      fetch("https://academy-video-api.herokuapp.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          if (res.status === 400) {
            throw new Error("Failure: please check the login details");
          }
          return res.json();
        })
        .then((result) => {
          setUser(result.token);
        })
        .catch((err) => {
          setError(err.message);
        });
    },
    [setUser, setError]
  );

  useEffect(() => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
