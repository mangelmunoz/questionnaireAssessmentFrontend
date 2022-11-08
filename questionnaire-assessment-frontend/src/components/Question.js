import '../styles/Question.css'

function Question(props) {

    return (
        <div className="margins">
            <div className="card text-white bg-dark mb-3 container-md">
                <div className="card-body">
                    <h5 className="card-title">Question no.1/20</h5>
                    <p className="card-text">{props.questionText && props.questionText}</p>
                    <select onSelect={0} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value={0}>Pick an answer</option>
                        {props.answers && props.answers.map(answer => <option value={answer.answerText}>{answer.answerText}</option>)}
                    </select>
                </div>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" onClick={() => props.onSubmit(select.options[select.selectedIndex].value)}>Submit</button>
            </div>
        </div>
    );
}

export default Question;