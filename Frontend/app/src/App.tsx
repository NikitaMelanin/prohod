import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/components/Pages/mainPage/main' ;
import FormPage from "../src/components/Pages/formPage/form" ;
import AuthPage from "../src/components/Pages/authPage/authPage";
import RegistrationPage from "./components/Pages/registrationPage/registrationPage";
import AdminPanel from "../src/components/Pages/dashboard/admin/adminPanel"
import PrivateRoute from "../src/routes/privateRoute";
import PersonalAccount from "../src/components/Pages/dashboard/admin/components/personalAccount";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/>}></Route>
                <Route path="/FormPage" element={<FormPage/>}></Route>
                <Route path="/AuthPage" element={<AuthPage/>}></Route>
                <Route path="/RegistrationPage" element={<RegistrationPage/>}></Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/dashboard/:id/admin" element={<AdminPanel/>}></Route>
                    <Route path="/dashboard/:id/user" element={<PersonalAccount/>}></Route>
                    <Route path="/dashboard/:id/security" element={<AdminPanel/>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
