import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const handleReset = () => {
    selected > anecdotes.length - 2
      ? setSelected(0)
      : setSelected(selected + 1);
  };

  const addVote = () => {
    const pointCopy = [...points];
    pointCopy[selected] += 1;
    setPoints(pointCopy);
  };

  const findMostPoints = (arr) => arr.indexOf(Math.max(...arr));

  return (
    <Fragment>
      <div>Largest Anecodote {props.anecdotes[findMostPoints(points)]}</div>

      <div>{props.anecdotes[selected]}</div>
      <p>{points[selected]}</p>
      <Button handleClick={handleReset} text='next anecdote' />
      <Button handleClick={addVote} text='vote' />
    </Fragment>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it.",
  "Program testing can be used to show the presence of bugs, but never to show their absence!",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
