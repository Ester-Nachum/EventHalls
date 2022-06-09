import React from 'react';
import {Route,Routes} from 'react-router-dom';
import  Home from './components/homePage/home';
import  LoginEventOwner from './components/eventOwner/login/login';
import  LoginHallOwner from './components/hallOwner/login/login';
import  RegisterEventOwner from './components/eventOwner/register/register';
import RegisterHallOwner from './components/hallOwner/register/register'
import Halls from './components/halls/halls'

export default function RoutesPage() {
    return(
<Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/loginEventOwner'element={<LoginEventOwner/>} ></Route>
    <Route path='/loginHallOwner'element={<LoginHallOwner/>} ></Route>
    <Route path='/registerHallOwner'element={<RegisterHallOwner/>} ></Route>
    <Route path='/registerEventOwner'element={<RegisterEventOwner/>} ></Route>
    <Route path='/halls'element={<Halls/>} ></Route>
</Routes>
    )
}