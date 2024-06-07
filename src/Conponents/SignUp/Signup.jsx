import {useState} from 'react'
import './Signup.css'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const Signup=()=>{
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')

    const handleSubmit = async(e)=> {
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            console.log("Account Created Successfully")
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className= 'signup-container'>
            <form className='signup-form'onSubmit={handleSubmit} >
                <h2 className='signup-title'>Sign Up</h2>
                <label className='signup-email' htmlFor="email">
                    <input type="text"  placeholder='Enter your Email' onChange={(e)=> setEmail(e.target.value)} />
                </label>
                <label className='signup-password' htmlFor="password">
                    <input type="password"  placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)} />
                </label>
                <button className='signup-button' type='submit'>Sign Up</button>
                <p className='signup-exists'>Already Registered? <Link to='/login' className='signup-login' href="">Login</Link></p> 
            </form>
        </div>
    )
}
export default Signup;