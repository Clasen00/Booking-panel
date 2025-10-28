"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const localStorageIsAuthenticated =
      localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(localStorageIsAuthenticated);
  }, [router]);

  const requireAuth = useCallback(
    (callback: () => void) => {
      if (!isAuthenticated) {
        // Перенаправляем на страницу входа с сохранением текущего пути
        router.push("/login");
        return false;
      }
      callback();
      return true;
    },
    [isAuthenticated, router],
  );

  const login = useCallback((login: string) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userLogin", login);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userLogin");

    router.push("/");
  }, [router]);

  return {
    isAuthenticated,
    requireAuth,
    login,
    logout,
  };
};
