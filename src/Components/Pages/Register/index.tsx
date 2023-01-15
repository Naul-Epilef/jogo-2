import React, { useState } from "react"
import api from "../../../config/api"

const Register = () => {    
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleRegister = () => {
        // api.get("/register", {
        //     params: {
        //         email,
        //         username,
        //         password,
        //     }
        // }).then(({ data }) => {
        //     console.log(data);
        // });
    }

    return (
        <>
            <h1>Register</h1>
            <br />
            <a href="/">Home</a>
            <br />
            <input type="email"    placeholder="email" onClick={(event) => setEmail(event.currentTarget.value)}/>
            <input type="text"     placeholder="username" onClick={(event) => setUsername(event.currentTarget.value)}/>
            <input type="password" placeholder="password" onClick={(event) => setPassword(event.currentTarget.value)}/>
            <button type="button" onClick={() => handleRegister()}>Submit</button>
            <br />
            <a href="/login">login</a>
            <br />
            <a href="/forgot-password">Forgot Password</a>
        </>
    );
}

export default Register;