export default function Scoreboard(props) {
  const score = props.score;
  const highscore = props.highscore;
  return (
    <div id="scoreCont">
      <div id="score">Score: {score}</div>
      <div id="bestScore">Best score: {highscore}</div>
    </div>
  );
}
