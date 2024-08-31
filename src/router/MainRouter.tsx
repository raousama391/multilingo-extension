import { auth } from "@/firebase/firebaseConfig";
import { Routes } from "@/lib/emums";
import AuthPage from "@/pages/AuthPage";
import ChatPage from "@/pages/ChatPage";
import { useRouterStore } from "@/store/routerStore";
import { User } from "@firebase/auth";
import React, { useEffect, useState } from "react";

const MainRouter = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);
  const setRoute = useRouterStore((state) => state.setCurrentRoute);
  const currentRoute = useRouterStore((state) => state.currentRoute);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUserData(user);
      setRoute(
        user
          ? currentRoute === Routes.INITIAL || currentRoute === Routes.AUTH_PAGE
            ? Routes.CHAT_PAGE
            : currentRoute
          : Routes.AUTH_PAGE
      );
      user && setIsAuthenticated(true);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {currentRoute === Routes.CHAT_PAGE && <ChatPage />}
      {currentRoute === Routes.AUTH_PAGE && <AuthPage />}
    </>
  );
};

export default MainRouter;
