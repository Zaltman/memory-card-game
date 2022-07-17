import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import { createContext, useContext } from 'react';

export const ScoreContext = createContext();
export const HighScoreContext = createContext();
function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <HighScoreContext.Provider value={{ highscore, setHighscore }}>
        <div className="App">
          <Header score={score} highscore={highscore} />
          <Cards score={score} />
        </div>
      </HighScoreContext.Provider>
    </ScoreContext.Provider>
  );
}

export default App;
