import { useEffect, useState } from 'react';
import cardsObjArray from '../assets/cardsArray';
import Card from './Card';
import uniqid from 'uniqid';
import { ReactDOM } from 'react';

export default function Cards(props) {
  const [cardsArray, setCardsObjArray] = useState(cardsObjArray);
  const [score, setScore] = useState(0);
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

    let newArray = getStateCardsArray();
    if (newArray[index].wasPicked === true) {
      alert('gg');
      restartGame();
      cleanAllIsRenderingCards();
      set4CardsToRender();
      return;
    }
    newArray[index].wasPicked = true;
    cleanAllIsRenderingCards();
    set4CardsToRender();
  };

  useEffect(() => {
    set4CardsToRender();

    return () => {
      cleanAllIsRenderingCards();
      setCardsObjArray(newArray);
    };
  }, []);

  return (
    <div id="cardsCont">
      {cardsArray.map((cardObj) => {
        if (cardObj.isRendering === true) {
          return <Card cardObj={cardObj} key={uniqid()} handleCardClick={handleCardClick}></Card>;
        }
      })}
    </div>
  );
}
