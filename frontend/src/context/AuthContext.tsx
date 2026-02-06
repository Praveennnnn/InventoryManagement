import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface User {
    role: string;
    // Add other user properties as needed
}

interface AuthContextType {
    user: User | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("pos-user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (userData: User, token: string) => {
        setUser(userData);
        localStorage.setItem('pos-user', JSON.stringify(userData));
        localStorage.setItem('pos-token', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('pos-user');
        localStorage.removeItem('pos-token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;