import React,{useState,useContext} from 'react';
import {Questions} from '../Helpers/Question';
import {QuizContext} from '../Helpers/Contexts';

export default function Quiz() {
     const {score,setScore,setGameState} = useContext(QuizContext);
     const [currQuestion, setCurrQuestion] = useState(0);
     const [optionChosen, setOptionChosen] = useState("");

     const chooseOption = (option) => {
        setOptionChosen(option);
         if(Questions[currQuestion].answer === option){
            setScore(score+1);
        }
        if(currQuestion === Questions.length - 1){
            setGameState('endScreen')
         }
        setCurrQuestion(currQuestion+1);
        
      };
     const nextQuestion=()=>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score+1);
        }
        setCurrQuestion(currQuestion+1);
    };
    const finishQuiz= ()=>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1);
        }
        setGameState('endScreen')
    }
     
        const [seconds, setSeconds] = React.useState(60);
      
        React.useEffect(() => {
          if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds('!انتهى الوقت المسموح بع في المسابقة');
            setGameState('endScreen')
          }
        });
      
     return (
        <div className="Quiz">
           {/* <span className="subtitle">Welcome, {userName}</span> */}
             <h3>{currQuestion+1}: سؤال رقم </h3>
             <span>{seconds} :الوقت</span>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={()=>chooseOption("A")}
                >
                    {Questions[currQuestion].optionA}
                </button>
                <button onClick={()=>chooseOption("B")}>
                    {Questions[currQuestion].optionB}
                </button>
                <button onClick={()=>chooseOption("C")}>
                    {Questions[currQuestion].optionC}
                </button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}  id="nextQuestion">إنهاء الاختبار </button>):(
                <button onClick={nextQuestion}  id="nextQuestion">السؤال التالي</button>              
                )
            }
            <label>{currQuestion+1}/{Questions.length}</label>
        </div>
    )
}
