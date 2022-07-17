import Scoreboard from './Scoreboard';
export default function Header(props) {
  const score = props.score;
  const highscore = props.highscore;
  return (
    <header id="mainHeader">
      <div id="titleCont">
        <div className="title">Memory game</div>
        <div id="description">A short description for game</div>
      </div>
      <Scoreboard score={score} highscore={highscore} />
    </header>
  );
}
