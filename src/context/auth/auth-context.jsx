import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        encodedToken: localStorage.getItem("token") ?? "",
        fullName: localStorage.getItem("fullName") ?? "",
        email: localStorage.getItem("email") ?? "",
    });

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
