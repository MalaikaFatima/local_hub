import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {

        const savedUser = localStorage.getItem("user");

        return savedUser ? JSON.parse(savedUser) : null;

    });

    const [token, setToken] = useState(() => {

        return localStorage.getItem("token");

    });

    // Authentication
    const isAuthenticated = !!token;

    // User Role
    const role = user?.role || null;

    useEffect(() => {

        if (user) {

            localStorage.setItem("user", JSON.stringify(user));

        } else {

            localStorage.removeItem("user");

        }

    }, [user]);

    useEffect(() => {

        if (token) {

            localStorage.setItem("token", token);

        } else {

            localStorage.removeItem("token");

        }

    }, [token]);

    const login = (userData, authToken) => {

        setUser(userData);

        setToken(authToken);

    };

    const logout = () => {

        setUser(null);

        setToken(null);

        localStorage.removeItem("user");

        localStorage.removeItem("token");

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                role,
                token,
                isAuthenticated,
                login,
                logout,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}