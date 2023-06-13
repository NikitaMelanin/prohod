import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./components/Pages/mainPage/main" ;
import FormPage from "./components/Pages/formPage/form" ;
import AuthPage from "./components/Pages/authPage/authPage";
import RegistrationPage from "./components/Pages/registrationPage/registrationPage";




function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={ <Main/>}></Route>
    <Route path="/FormPage" element={<FormPage/>}></Route>
    <Route path="/AuthPage" element={<AuthPage/>}></Route>
    <Route path="/RegistrationPage" element={<RegistrationPage/>}></Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
