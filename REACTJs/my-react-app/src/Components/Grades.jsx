/*
This Functional Component Would Take Two Arguments.
1. Score
2. Total Score
(score/total score) * 50 + 50
*/

let school = "Mapua University";

function getGrade(s, t) {
  return (s / t) * 50 + 50;
}

function greet() {
  let x = prompt("Enter a word");
  alert(x);
}

const Grades = function ({ score, total }) {
  return (
    <>
      {" "}
      <h1>Grades</h1>
      <p>
        Score: <span>{score}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <h2>
        Final Grade: <span>{getGrade(score, total)}</span>
      </h2>
      <button onClick={greet}>Show</button>
      <p>{school}</p>
    </>
  );
};

export default Grades;

// const Grades = function () {
//   return <h1>Grades</h1>;
// };

// export default Grades;
