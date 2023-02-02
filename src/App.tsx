import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBar } from "./components/SideBar";
import { Home, DashBoard, User } from "./pages";

import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
