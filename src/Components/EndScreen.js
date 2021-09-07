import React,{useContext} from 'react'
import { Questions } from '../Helpers/Question';
import {QuizContext} from '../Helpers/Contexts';
import "../App.css"

export default function EndScreen() {
    const {score,setScore,setGameState} = useContext(QuizContext);
    const restartQuiz=() =>{
        setScore(0);
        setGameState('menu');
    }
    return (
        <div className="EndScreen">
            <h1>انتهى الاختبار</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restartQuiz}>أعد تشغيل الاختبار </button>
        </div>
    )
}
