import React, {useState} from 'react'
import './CreateAccount.css'
import logo from'./assets/81b62a7f-4596-412f-8a58-59b204837d32.jpg'
import { Link, useHistory } from 'react-router-dom'
import {auth }from './Firebase'

function Login() {
const history= useHistory();
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');

const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
        console.log(auth);
        if(auth){
            history.push('/')
        }
    })
    .catch(error => alert(error.message))
}

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src={logo} alt=""/>
            </Link>
        
        <div className="login__container">
        <h1>Sign up</h1>
        <hr/>
        <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' className="login__registerButton" onClick={register}>Sign up</button>
            <p  className="login__signInP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Link to='/login'>
        <p>
            Already have an Account ?

        </p>
        </Link>
        </form>
         </div>
     </div>
    )
}

export default Login
