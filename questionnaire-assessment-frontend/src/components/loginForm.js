import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loginForm.css';



function LoginForm() {

    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        
        if(!submit){
            return;
        }

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

        let string = "http://localhost:8080/user/get/" + email;
        fetch(string, requestOptions)
        .then(response => {

            if(!response.ok) {
                console.log("USUARIO YA REGISTRADO")
                return;
            }

        } )
        .then( () => navigate("/question") )
        .catch(error => console.log('error', error));

    }, [submit])

    const onSubmit = (event) => {

        setSubmit(true)

        console.log(event.target)
        setEmail(document.getElementById("emailInput").value)
        
    
    }

    return (
        <div className="row justify-content-center margins">
            <div className="card col-3">
                <div className="card-body">
                    <h2>LOGIN</h2>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="emailInput" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                        </div>
                        <button type="button" className="btn btn-primary" id="loginSubmit" onClick={onSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;