import { useContext } from 'react';


import Question from './components/question/Question';

import './App.css';
import { QuizContext } from './context/quiz';
import Welcome from './components/welcome/Welcome';



function App() {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div className="App">
     <h1>Quizz App!</h1>
     {quizState.gameStage === "Start" && <Welcome />}
     {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
