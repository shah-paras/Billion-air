"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  createdAt: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem("billionaire_client_token");
      const userData = localStorage.getItem("billionaire_client_user");

      if (token && userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("billionaire_client_token");
      localStorage.removeItem("billionaire_client_user");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      if (email === "demo@example.com" && password === "demo123") {
        const mockUser: User = {
          id: "1",
          email: email,
          firstName: "John",
          lastName: "Doe",
          phone: "+1-555-123-4567",
          createdAt: new Date().toISOString(),
        };

        const mockToken = "mock-jwt-token-" + Date.now();

        localStorage.setItem("billionaire_client_token", mockToken);
        localStorage.setItem(
          "billionaire_client_user",
          JSON.stringify(mockUser)
        );

        setUser(mockUser);
        setIsAuthenticated(true);
        setIsLoading(false);

        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: "Login failed. Please try again." };
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        createdAt: new Date().toISOString(),
      };

      const mockToken = "mock-jwt-token-" + Date.now();

      localStorage.setItem("billionaire_client_token", mockToken);
      localStorage.setItem("billionaire_client_user", JSON.stringify(newUser));

      setUser(newUser);
      setIsAuthenticated(true);
      setIsLoading(false);

      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return {
        success: false,
        error: "Registration failed. Please try again.",
      };
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("billionaire_client_token");
      localStorage.removeItem("billionaire_client_user");

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };
};
