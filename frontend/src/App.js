import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";  // Import Registration from the 'pages' folder
import Login from "./pages/Login";  // Import Login from the 'pages' folder
import HomePage from "./pages/HomePage";  // Import HomePage from the 'pages' folder

function App() {
    return (
        <Router>
            <div>
            <h1 style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', margin: '20px 0' }}>
                    Together
                </h1>

                
                {/* Simple navigation links */}
                <nav style={{ position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)' }}>
                    <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
                    <Link to="/login">Login</Link>
                </nav>
                
                {/* Define the routes for different components */}
                <Routes>
                    <Route path="/register" element={<Registration />} />  {/* Registration Page */}
                    <Route path="/login" element={<Login />} />  {/* Login Page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
