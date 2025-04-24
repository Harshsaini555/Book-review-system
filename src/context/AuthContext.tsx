import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Auto-check session on page load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost/Backend/checkSession.php", {
          credentials: "include"
        });
        if (res.ok) {
          const data = await res.json();
          if (data.status === "success") {
            setUser(data.user);  // user is still logged in
          }
        }
      } catch (err) {
        console.error("Session check failed:", err);
      }
    };

    checkSession();
  }, []);

  const login = (userData: User) => setUser(userData);

  const logout = async () => {
    try {
      const res = await fetch("http://localhost/Backend/logout.php", {
        credentials: "include"
      });
      if (res.ok) setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
