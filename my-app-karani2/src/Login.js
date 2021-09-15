import React, {useState} from 'react'
import './Login.css'
import logo from'./assets/81b62a7f-4596-412f-8a58-59b204837d32.jpg'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './Firebase'
function Login() {
    const history = useHistory();
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');

const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
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
        <h1>Sign in</h1>
        <hr/>
        <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' className="login__signInButton" onClick={signIn}>Sign in</button>
            <p className="login__signInP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Link to='/create'>
        <p className="login__signInpp">
            Create a new account ?

        </p>
        </Link>
        <Link to='/checkout'>
        <p className="login__signInp">
            proceed to checkout?

        </p>
        </Link>
        </form>
         </div>
     </div>
    )
}

export default Login
