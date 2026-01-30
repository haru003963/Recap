import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import Analysis from "./pages/Analysis/Analysis";
import Calendar from "./pages/Calendar/Calendar";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Box pb="60px">
        {" "}
        {/* 下のメニューが被らないように余白を作る */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Box>
      <Navbar />
    </Router>
  );
}

export default App;
