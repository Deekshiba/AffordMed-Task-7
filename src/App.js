import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;


