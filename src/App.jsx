import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Conponents/SignUp/Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../src/Conponents/LogIn/Login'



function App() {
 
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
