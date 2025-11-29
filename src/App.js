import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";
import Student from "./pages/Student";

// Components
import Header from "./components/Header";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
