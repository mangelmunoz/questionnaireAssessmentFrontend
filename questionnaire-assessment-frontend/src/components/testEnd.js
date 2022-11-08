import { useNavigate } from 'react-router-dom';

function TestEnd() {

    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    }

    return (
        <div className="card ">
            <div className="card-body row align-items-center">
                TEST ENDED
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" onClick={onClick}>Go back to login</button>
            </div>
        </div>
    );
}

export default TestEnd;