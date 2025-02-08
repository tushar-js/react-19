import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import NotFoundPage from "./pages/not-found/not-found-page";
import SignInPage from "pages/sign-in/sign-in-page";
import SignUpPage from "pages/sign-up/sign-up-page";

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
                    path='/sign-in'
                    element={<SignInPage />}
                />
                <Route
                    path='/sign-up'
                    element={<SignUpPage />}
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
