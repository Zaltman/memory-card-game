export default function Card(props) {
  const cardObj = props.cardObj;
  const handleCardClick = props.handleCardClick;
  return (
    <button onClick={handleCardClick} className={'cardCont'}>
      <img className="card" data-index={cardObj.index} src={cardObj.link}></img>
      <div className="cardTitle">{cardObj.name}</div>
    </button>
  );
}
