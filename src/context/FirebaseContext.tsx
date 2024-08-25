import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { signInWithGoogle } from "@/firebase/libs";
import { toast } from "sonner";
import { auth } from "@/firebase/firebaseConfig";

interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => void;
  logOut: () => void;
  signup: (userName: string, passowrd: string, fullName: string) => void;
  emailLogin: (userName: string, passowrd: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logOut = () => {
    signOut(auth);
  };

  const signup = async (
    userName: string,
    passowrd: string,
    fullName: string
  ) => {
    const user = await createUserWithEmailAndPassword(auth, userName, passowrd);
    await sendEmailVerification(user.user);
    await updateProfile(user.user, {
      displayName: fullName,
    });
    await signOut(auth);
  };

  const emailLogin = async (userName: string, passowrd: string) => {
    const userData = await signInWithEmailAndPassword(auth, userName, passowrd);
    if (userData.user.emailVerified === false) {
      signOut(auth);
      toast("Verify Email", {
        description: "Please verify your email ",
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, logOut, signup, emailLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
