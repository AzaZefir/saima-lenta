import React from "react";
import "./Quize.scss";
import { questions } from "./../../db/db";

const Quize = ({ step, question, onClickVariants }) => {
  
  const percent = Math.round((step / questions.length) * 100);

  return (
    <div className="quize__wrapper">
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__bar"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariants(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quize;
