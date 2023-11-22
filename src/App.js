import React from "react";
import "./App.css";
import TrackingApp from "./components/TrackingApp/TrackingApp";
import MyTracking from "./components/MyTracking/MyTracking";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import { Switch } from "antd";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path="/track-price" element={<TrackingApp />} />
                    <Route path="/my-tracking" element={<MyTracking />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
