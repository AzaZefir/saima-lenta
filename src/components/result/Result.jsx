import React from "react";
import "./Result.scss";
import { questions } from "./../../db/db";

const Result = ({ correct }) => {
  return (
    <div className="result">
      <img
        src="https://cdn0.iconfinder.com/data/icons/pug/512/pug_dog_sticker_emoji_emoticon_hacker-512.png"
        alt=""
      />
      <h1>
        Правильно {correct} из {questions.length}
      </h1>
      <a href="/">
        <button class="button-64" role="button">
          <span class="text">Начать с начала</span>
        </button>
      </a>
    </div>
  );
};

export default Result;
