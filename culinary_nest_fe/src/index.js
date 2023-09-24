import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./pages/Home";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);