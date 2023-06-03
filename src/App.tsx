import MainUIWrapper from "./common";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home, Projects, Research, Resume } from "./pages";

function App() {
  return (
    <MainUIWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Outlet />
    </MainUIWrapper>
  );
}

export default App;
