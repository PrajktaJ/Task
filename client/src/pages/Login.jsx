import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(pass)
    }
    return (
        <div class="parent">
            <div class="child">
                <form onSubmit={handleLogin}>
                    <h1><center><u>Login</u></center></h1>
                       <span>Email</span>
                    <input type="email" value={email} onChange={(e) => (setEmail)(e.target.value)} /><br/><br/>
                    <span>Password</span>
                    <input type="pass" value={pass} onChange={(e) => (setPass)(e.target.value)} /><br/><br/>
                    <br/>

                    <br/>

                    <button type="submit">Login</button><br/>
                    <span>Don't have an account? </span>Signup
                </form>
            </div>

        </div>
    )
}
export default Login
