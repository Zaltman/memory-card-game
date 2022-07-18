import { useContext, useEffect, useState } from 'react';
import cardsObjArray from '../assets/cardsArray';
import Card from './Card';
import uniqid from 'uniqid';
import { HighScoreContext, ScoreContext } from '../App';

export default function Cards(props) {
  const [cardsArray, setCardsObjArray] = useState(cardsObjArray);
  const { score, setScore } = useContext(ScoreContext);
  const { highscore, setHighscore } = useContext(HighScoreContext);
  let newArray = [...cardsArray];

  function getStateCardsArray() {
    let newArray = [...cardsArray];
    return newArray;
  }
  function activateCard() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let indexToActivate = getRandomInt(12);
    if (newArray[indexToActivate].isRendering === true) {
      return activateCard();
    } else if (newArray[indexToActivate].isRendering === false) {
      newArray[indexToActivate].isRendering = true;
    }
  }

  function restartGame() {
    let newArray = getStateCardsArray();
    newArray.forEach((element) => {
      element.isRendering = false;
      element.wasPicked = false;
    });
    setCardsObjArray(newArray);
  }

  function cleanScore() {
    setScore(0);
  }

  function set4CardsToRender() {
    for (let i = 0; i < 4; i++) {
      activateCard();
    }
    setCardsObjArray(newArray);
  }

  function cleanAllIsRenderingCards() {
    newArray.forEach((element) => {
      element.isRendering = false;
    });
  }

  let handleCardClick = (e) => {
    let index = e.target.getAttribute('data-index');
    if (index === null) {
      return;
    }

    let ifHighscoreSet = () => {
      if (updatedScore >= updatedHighscore) {
        setHighscore(updatedScore);
      }
    };

    let newArray = getStateCardsArray();
    let updatedScore = score;
    let updatedHighscore = highscore;

    if (newArray[index].wasPicked === true) {
      ifHighscoreSet();
      restartGame();
      cleanAllIsRenderingCards();
      set4CardsToRender();
      cleanScore();
      return;
    }

    newArray[index].wasPicked = true;
    updatedScore += 1;
    setScore(updatedScore);
    ifHighscoreSet();
    cleanAllIsRenderingCards();
    set4CardsToRender();
  };

  useEffect(() => {
    set4CardsToRender();

    return () => {
      cleanAllIsRenderingCards();
      setCardsObjArray(newArray);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="cardsCont">
      {cardsArray.map((cardObj) => {
        // eslint-disable-next-line
        if (cardObj.isRendering === true) {
          return <Card cardObj={cardObj} key={uniqid()} handleCardClick={handleCardClick}></Card>;
        }
        return null;
      })}
    </div>
  );
}
