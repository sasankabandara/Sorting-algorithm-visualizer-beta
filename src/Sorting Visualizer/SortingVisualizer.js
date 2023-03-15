import React, { useState } from "react";
import "./SortingVisualizer.css";
import selectionSort from "./selectionSort";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function SortingVisualizer() {
  const arrayElements = 310;

  const array = []; //remove
  for (let i = 0; i < arrayElements; i++) {
    array.push(randomIntFromInterval(5, 650));
  }

  const [, setArray] = useState(0);

  // const [array , setNArray] = useState();
  // setNArray(sortedArray)

  return (
    <div className="array-container">
      {array.map((array, index) => (
        <div
          className="aBar"
          key={index}
          style={{ height: `${array}px` }}
        ></div>
      ))}
      <div className="buttonDiv">
        <button onClick={setArray}>Create new array</button>
        <button onClick={() => selectionSort(array, arrayElements)}>
          Selection sort
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
