const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <br />
            <a href="/">Home</a>
            <br />
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <br />
            <a href="/register">Register</a>
            <br />
            <a href="/forgot-password">Forgot Password</a>
        </>
    );
}

export default Login;