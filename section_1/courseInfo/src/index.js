import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <Fragment>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </Fragment>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return <p>Number of exercises {totalExercises}</p>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
