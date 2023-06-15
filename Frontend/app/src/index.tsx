import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css'
// import '../src/components/Pages/authPage/authorization.css'
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Pages/mainPage/main";
import FormPage from "./components/Pages/formPage/form";
import AuthPage from "./components/Pages/authPage/authPage";
import RegistrationPage from "./components/Pages/registrationPage/registrationPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>

);

