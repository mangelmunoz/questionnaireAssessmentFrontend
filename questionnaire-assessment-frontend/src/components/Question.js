import '../styles/Question.css'

function Question(props) {



    return (
        <div className="margins">
            <div class="card text-white bg-dark mb-3 container-md">
                <div class="card-body">
                    <h5 class="card-title">Question no.1/20</h5>
                    <p class="card-text">{props.questionText && props.questionText}</p>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Pick an answer</option>
                        {props.answers && props.answers.map(answer => <option value={answer}>{answer}</option>)}
                    </select>
                </div>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" onClick={props.onSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Question;