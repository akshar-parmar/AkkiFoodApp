const Login = ()=>{
    return (
        <div className ="wrapper-login">
        <div className = "login-sub-container">
            <h1>Login</h1>
            <input className = "login-input" type = "text" placeholder ="Enter your email"></input>
            <input className = "login-input" type = "text" placeholder ="Enter your password"></input>
            <button className = "login-btn-submit">Login</button>
        </div>
        </div>
    )
}
export default Login;