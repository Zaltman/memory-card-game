export default function Card(props) {
  const cardObj = props.cardObj;
  const handleClick = props.handleClick;
  return (
    <button onClick={handleClick} className="cardCont">
      <img className="card" src={cardObj.link} data-index={cardObj.index}></img>
      <div className="cardTitle">{cardObj.name}</div>
    </button>
  );
}
