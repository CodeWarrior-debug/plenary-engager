import "./App.css";
import Home from "./pages/home";
import { atom } from "jotai";

export const themeAtom = atom("light");

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
