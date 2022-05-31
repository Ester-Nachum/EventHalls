import React from 'react';
import {Route,Routes} from 'react-router-dom';
import  Home from './components/homePage/home';
import  LoginEventOwner from './components/login/loginEventOwner';
import  LoginHallOwner from './components/login/loginHallOwner';
import  Register from './components/register/register';


export default function RoutesPage() {
    return(
<Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/loginEventOwner'element={<LoginEventOwner/>} ></Route>
    <Route path='/loginHallOwner'element={<LoginHallOwner/>} ></Route>
    <Route path='/register'element={<Register/>} ></Route>
</Routes>
    )
}