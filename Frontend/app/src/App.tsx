import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./components/main" ;
import FormPage from "./components/form" ;





function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={ <Main/>}></Route>
    <Route path="/FormPage" element={<FormPage/>}></Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
