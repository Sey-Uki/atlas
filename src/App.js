import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./components/Routes/Routes";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
}
