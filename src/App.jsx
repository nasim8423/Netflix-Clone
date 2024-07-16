import React from "react";
import Home from "./components/Pages/Home";

import SignIn from "./components/Pages/SignIn";
import {BrowserRouter,Routes, Route}  from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/signin" element = {<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
