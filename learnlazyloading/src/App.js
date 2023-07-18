import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Blur from "./pages/Blur.js";
import Default from "./pages/default.js";
import Placeholder from "./pages/Placeholder.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blur" element={<Blur />} />
        <Route path="default" element={<Default />} />
        <Route path="placeholder" element={<Placeholder />} />
      </Routes>
    </Router>
  );
}

export default App;
