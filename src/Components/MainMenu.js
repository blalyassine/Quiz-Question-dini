import React,{useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';
import '../App.css';
export default function MainMenu() {
  const {setGameState} = useContext(
    QuizContext
    
  );
    return (
        <div className="Menu">
            {/*<input
                type="text"
                placeholder="أدخل أسمك الكامل"
                onChange={(event) => {
                   setUserName(event.target.value);
                }}
            />*/}
            <button onClick={()=>{
                setGameState('quiz')
            }}>ابدأ الاختبار </button>
        </div>
    )
}
