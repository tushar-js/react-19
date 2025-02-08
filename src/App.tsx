import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import NotFoundPage from "./pages/not-found/not-found-page";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/about'
                    element={<AboutPage />}
                />
                <Route
                    path='*'
                    element={<NotFoundPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
