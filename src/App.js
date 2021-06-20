import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./components/Routes/Routes";
import { HeaderIcons } from "./components/HeaderIcons/HeaderIcons";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderIcons />
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
}
