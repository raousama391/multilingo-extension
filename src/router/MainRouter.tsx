import { auth } from "@/firebase/firebaseConfig";
import ChatPage from "@/pages/ChatPage";
import { User } from "@firebase/auth";
import React, { useEffect, useState } from "react";

const MainRouter = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUserData(user);
      user && setIsAuthenticated(true);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <ChatPage />
    </>
  );
};

export default MainRouter;
