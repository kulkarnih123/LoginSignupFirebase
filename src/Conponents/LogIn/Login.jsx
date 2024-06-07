import {useState} from 'react'
import './Login.css'
import { auth } from '../../Firebase'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const Login=()=>{
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')

    const handleSubmit = async(e)=> {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword (auth, email, password)
            console.log("Login Successfull")
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className= 'login-container'>
            <form className='login-form'onSubmit={handleSubmit} >
                <h2 className='login-title'>Login</h2>
                <label className='login-email' htmlFor="email">
                    <input type="text"  placeholder='Enter your Email' onChange={(e)=> setEmail(e.target.value)} />
                </label>
                <label className='login-password' htmlFor="password">
                    <input type="password"  placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)} />
                </label>
                <button className='login-button' type='submit'>Login</button>
                <p className='login-exists'>Dont have an account? <Link to='/signup' className='login-signup'>Sign Up</Link></p> 
            </form>
        </div>
    )
}
export default Login;