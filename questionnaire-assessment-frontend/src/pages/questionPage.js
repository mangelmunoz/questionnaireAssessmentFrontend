import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Question from "../components/question";

function QuestionPage(props) {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        console.log("Email: " + props.email)
        fetch("http://localhost:8080/question/get/all", requestOptions)
        .then(response => response.json())
        .then(result => {
            setQuestions([...result]); 
        })
        .catch(error => console.log('error', error));
    }, [])

    const onQuestionSubmitted = (answer) => {
        console.log(answer);
        setAnswers(prevanswer => [...prevanswer, answer])

        if (currentIndex + 1 >= questions.length) {
            navigate("/testend");
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <div>
            <Question questionText={questions[currentIndex] && questions[currentIndex].questionText} answers={questions[currentIndex] && questions[currentIndex].answers} onSubmit={onQuestionSubmitted} />
        </div>
    );
}

export default QuestionPage;