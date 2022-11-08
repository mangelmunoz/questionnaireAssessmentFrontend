import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Question from "../components/question";

function QuestionPage(props) {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [post, setPost] = useState(false);
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

    useEffect(() => {

        if(!post) {
            return;
        }

        if(currentIndex == questions.length - 1){
            document.querySelector('.btn-submit').classList.remove("btn-primary")
            document.querySelector('.btn-submit').classList.add("btn-success")
            document.querySelector('.btn-submit').textContent = "Terminar";
        }


        if (currentIndex >= questions.length) {
            console.log(answers);
            fetch('http://localhost:8080/user/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "email": props.email, "answers": answers })
            })
                .then(response => response.json())
                .then(response => console.log("email " + props.email + " - answers " + answers ) && console.log(JSON.stringify(response)))
            navigate("/testend");
        }
    }, [answers])



    const onQuestionSubmitted = (answer) => {
        setAnswers(prevanswer => [...prevanswer, answer])
        setCurrentIndex(currentIndex + 1);
        setPost(true);
    }

    return (
        <div>
            <Question questionText={questions[currentIndex] && questions[currentIndex].questionText} answers={questions[currentIndex] && questions[currentIndex].answers} onSubmit={onQuestionSubmitted} />
        </div>
    );
}

export default QuestionPage;