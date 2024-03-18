import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/index" ;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;