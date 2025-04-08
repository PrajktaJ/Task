import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [password,setPassword]=useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(pass)
        console.log(password)
    }
    return (
        <>
            <div>
                <form onSubmit={handleLogin}>
                    <h1><center><u>Signup</u></center></h1>
                       <span>Email</span>
                    <input type="email" value={email} onChange={(e) => (setEmail)(e.target.value)} /><br/><br/>
                    <span>Password</span>
                    <input type="pass" value={pass} onChange={(e) => (setPass)(e.target.value)} /><br/><br/>
                    <br/>
                    <span>Confirm Password</span>
                    <input type="password" value={password} onChange={(e) => (setPassword)(e.target.value)} /><br/><br/>

                    


                    <button type="submit">Signup</button><br/>
                    <span>Don't have an account?Login</span>
                </form>
            </div>

        </>
    )
}
export default Signup
