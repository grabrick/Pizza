import React from "react";
import { Route, Routes } from 'react-router-dom';
import Basket from "./components/Pages/Basket/Basket";
import Home from "./components/Pages/Home/Home";


function useRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Basket" element={<Basket />} />
        </Routes>
    )
}

export default useRoutes