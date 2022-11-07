import { useState, useEffect } from "react";
import Question from "../components/question";

function QuestionPage() {

    const [questions, setQuestions] = useState([]);
    const [actualQuestion, setActualQuestion] = useState({});

    useEffect(() => { 
        console.log("Fetch questions")
        setQuestions([{questionText: "PRIMERA?", answers: ["UNO", "DOS", "TRES"]}, {questionText: "de verdad?", answers: ["SI", "NO", "A VECES"]}]);
        setActualQuestion(questions[0]);
    }, [])

    const onQuestionSubmitted = () => {
        /**
         * We pop a question
         */
        questions.pop()
        setQuestions(questions => [...questions]);
    }

    return (
        <div>
            <Question question={questions[0]} onSubmit={onQuestionSubmitted}/>
        </div>
    );
}

export default QuestionPage;