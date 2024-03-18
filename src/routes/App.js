import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/index";
import LOL from "../Home/lol";
// import "react-tooltip/dist/react-tooltip.css"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="**" element={<LOL/>} />
        <Route path="*" element={<LOL/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;