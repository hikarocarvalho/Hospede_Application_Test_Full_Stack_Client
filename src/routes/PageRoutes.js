import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import UserRegister from "../pages/userRegister/UserRegister";

export default function PageRoutes (){
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/user-register" element={<UserRegister/>}></Route>
        </Routes>
    );
}