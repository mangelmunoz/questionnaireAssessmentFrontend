import '../styles/Question.css'

function Question() {
    return (
        <div className="margins">
            <div class="card text-white bg-dark mb-3 container-md">
                <div class="card-body">
                    <h5 class="card-title">Question no.1/20</h5>
                    <p class="card-text">How big is your company?</p>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Pick an answer</option>
                        <option value="1">{"0-10"}</option>
                        <option value="2">{"10-100"}</option>
                        <option value="3">{">100"}</option>
                    </select>
                </div>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button">Previous</button>
                <button class="btn btn-primary me-md-2" type="button">Next</button>
            </div>
        </div>
    );
}

export default Question;