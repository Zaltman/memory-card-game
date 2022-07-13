import Scoreboard from './Scoreboard';
export default function Header() {
  return (
    <header id="mainHeader">
      <div id="titleCont">
        <div className="title">Memory game</div>
        <div id="description">A short description for game</div>
      </div>
      <Scoreboard />
    </header>
  );
}
