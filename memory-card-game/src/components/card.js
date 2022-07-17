export default function Card(props) {
  const cardObj = props.cardObj;
  const handleClick = props.handleClick;
  const wasPicked = cardObj.wasPicked;
  console.log(cardObj);
  return (
    <button onClick={handleClick} className={`cardCont ${wasPicked ? 'pickedCard' : ''}`}>
      <img className="card" src={cardObj.link} data-index={cardObj.index}></img>
      <div className="cardTitle">{cardObj.name}</div>
    </button>
  );
}
