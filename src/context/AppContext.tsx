import { createContext, useContext, useState } from "react";

interface AppContextType {
  currentRoute: string;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentRoute, setCurrentRoute] = useState<string>("");

  return (
    <AppContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContezt = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppConextProvider");
  }

  return context;
};
