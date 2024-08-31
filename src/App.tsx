import ChatForm from "./components/ChatForm";
import { Separator } from "./components/ui/separator";
import { AppContextProvider } from "./context/AppContext";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <AppContextProvider>
      <MainRouter />
    </AppContextProvider>
  );
}

export default App;
