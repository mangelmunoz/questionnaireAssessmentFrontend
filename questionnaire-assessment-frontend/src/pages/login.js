import LoginForm from "../components/loginForm";

function Login(props) {
    return (
        <div>
            <LoginForm setEmail={props.setEmail}/>
        </div>
    );
}

export default Login;