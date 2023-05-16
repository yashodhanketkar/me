import MainUIWrapper from "./components";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home, Projects, Research } from "./pages";

function App() {
  return (
    <MainUIWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Outlet />
    </MainUIWrapper>
  );
}

export default App;
