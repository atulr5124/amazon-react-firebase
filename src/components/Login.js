import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { register } from 'numeral'
import { auth } from '../firebase'

function Login() {
    
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
                    alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="email" onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)} />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
