import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [services, setServices] = useState([]);

  const authorizationToken = `Bearer ${token}`;
  const url = "https://mernwebbackend-40lw.onrender.com";

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); // Update token in state
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token; // Boolean value to check if user is logged in
  // console.log("isLoggedIn", isLoggedIn);

  // User Logout code
  const LogoutUser = () => {
    setToken(""); // Clear the token from state
    setUser(null); // Clear the user state
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  // JWT Authentication - get the currently logged-in User Data
  const Authentication = async () => {
    try {
      setIsloading(true);
      const response = await axios.get(`${url}/api/auth/user`, {
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        setIsloading(false);
      } else {
        setIsloading(false);
      }
    } catch (error) {
      console.log("Authentication Error:", error);
      LogoutUser(); // Logout the user if there's an error (e.g., token is invalid)
    }
  };

  useEffect(() => {
    if (token) {
      Authentication();
    }
  }, [token]); // Dependency array includes token

  // Fetch Service Data from Database
  const getServices = async () => {
    try {
      const response = await axios.get(`${url}/api/data/service`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        services,
        isloading,
        authorizationToken,
        url,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
