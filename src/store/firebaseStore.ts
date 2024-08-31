import { create } from "zustand";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { toast } from "sonner";

interface AuthState {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  signup: (email: string, password: string, fullName: string) => Promise<void>;
  emailLogin: (email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  signInWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error("Failed to sign in with Google");
    }
  },

  logOut: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  },

  signup: async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      //   await updateProfile(userCredential.user, { displayName: fullName });
      //   await signOut(auth);
      toast.success("Account created. Please verify your email.");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Failed to create account");
    }
  },

  emailLogin: async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //   if (!userCredential.user.emailVerified) {
      //     await signOut(auth);
      //     toast("Verify Email", {
      //       description: "Please verify your email",
      //     });
      //   }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Failed to log in");
    }
  },
}));

// Setup listener for auth state changes
onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ user });
});
