import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProgramHome from "./components/Program/ProgramHome";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<ProgramHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
