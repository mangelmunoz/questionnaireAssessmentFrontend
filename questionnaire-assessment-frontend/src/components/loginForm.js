import { useNavigate } from 'react-router-dom';
import '../styles/loginForm.css';



function LoginForm() {

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/question");
    }

    return (
        <div className="row justify-content-center margins">
            <div className="card col-3">
                <div className="card-body">
                    <h2>LOGIN</h2>
                    <form>
                        <div class="mb-2">
                            <label for="emailInput" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
                        </div>
                        <button type="button" class="btn btn-primary" id="loginSubmit" onClick={onSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;