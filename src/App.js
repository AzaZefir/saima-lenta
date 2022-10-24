import "./App.css";
import Quize from "./components/quize/Quize";
import Result from "./components/result/Result";
import { useState } from "react";
import { questions } from "./db/db";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariants = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  
  return (
    <div className="App">
      {step !== questions.length ? (
        <Quize
          step={step}
          question={question}
          onClickVariants={onClickVariants}
        />
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
