import { useEffect, useState } from 'react';
import cardsObjArray from '../assets/cardsArray';
import Card from './card';
import uniqid from 'uniqid';

export default function Cards() {
  const [cardsArray, setCardsObjArray] = useState(cardsObjArray);
  let newArray = [...cardsArray];

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

  useEffect(() => {
    let testInt = 0;
    for (let i = 0; i < 4; i++) {
      testInt += 1;
      activateCard();
    }
    setCardsObjArray(newArray);

    return () => {
      newArray.forEach((element) => {
        element.isRendering = false;
      });
      setCardsObjArray(newArray);
    };
  }, []);

  let handleClick = (e) => {
    console.log(e.target);
  };
  // console.log(cardsArray);
  return (
    <div id="cardsCont">
      {cardsArray.map((cardObj) => {
        if (cardObj.isRendering === true) {
          // console.log(cardObj);
          return <Card cardObj={cardObj} key={uniqid()} handleClick={handleClick}></Card>;
        }
      })}
      {/* <Card cardObj={cardsArray[0]} /> */}
      {/* {returnCards(cardsObjArray)} */}
      {/* <Card cardObj={cardsArray[1]} /> */}
      {/* <Card cardObj={cardsArray[2]} /> */}
      {/* <Card cardObj={cardsArray[3]} /> */}
    </div>
  );
}
