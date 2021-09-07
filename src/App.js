import './App.css';
import React,{useState} from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import {QuizContext} from './Helpers/Contexts';
function App() {
  const[gameState,setGameState]=useState('menu');
  const[score,setScore]=useState(0);
  const [name, setName] = useState();

  return (
    <div className="App">
      <h1>مسابقة ثقافية دينية</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu name={name} setName={setName}/>}
      {gameState === "quiz" && <Quiz  name={name} setName={setName}/>}
      {gameState === "endScreen" && <EndScreen  name={name} setName={setName}/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
