import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/home-page.tsx";
import AboutPage from "./pages/about/about-page.tsx";
import NotFoundPage from "./pages/not-found/not-found-page.tsx";

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
