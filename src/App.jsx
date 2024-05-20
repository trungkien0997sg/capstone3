import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoute from "./routes/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>{renderRoute()}</Routes>
    </BrowserRouter>
  );
}

export default App;
