import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import './App.css';

import Welcome from './components/welcome/Welcome';
import GameOver from './components/gameOver/GameOver';
import Question from './components/question/Question';



function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhando as perguntas
    // DISPATCH: tipo um 'setVariável' do UseState
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])


  return (
    <div className="App">
     <h1>Quizz App!</h1>
     {quizState.gameStage === "Start" && <Welcome />}
     {quizState.gameStage === "Playing" && <Question />}
     {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
