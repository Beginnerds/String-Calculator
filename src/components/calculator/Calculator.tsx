import React, { useState } from "react";
import { addNumbers } from "../../../services/addNumbers";

const Calculator = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const [answer, setAnswer] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setError("");
    setAnswer("");
    try {
      const result = addNumbers(text);
      setAnswer("Calculated : " + result);
    } catch (e) {
      if (e instanceof Error) {
        setError("Negative Values : " + e.message);
      }
    }
  };

  return (
    <div className="w-full  max-w-[560px] min-h-[560px] bg-slate-400 rounded-md shadow-sm">
      <div className="bg-indigo-500 rounded-md">
        <h1 className="text-center p-4 text-xl font-bold text-">
          String Calculator
        </h1>
      </div>
      <div className="flex flex-col gap-1 bg-indigo-300 p-4 rounded-md">
        <p className="text-sm  font-medium">
          * Separate numbers by comma for default behaviout e.g. 1,2,3
        </p>
        <p className="text-sm  font-medium">
          * Press enter to type numbers in a new line
        </p>
        <p className="text-sm  font-medium">
          * Type //customdelimeter and use it with numbers in new line instead
          of comma to get the sum
        </p>
        <p className="text-sm  font-medium">
          * numbers greater than 1000 will be ignored
        </p>
      </div>
      <textarea
        className="mt-8 rounded-md bg-slate-100 px-4 py-3 block mx-auto w-full max-w-[460px]"
        value={text}
        onChange={onTextChange}
        placeholder="e.g. 1,2,3 -- //:\n1:2:3"
      />
      <button
        className="block mx-auto px-4 py-3 mt-8 bg-green-300 rounded-md font-semibold fitler hover:brightness-75 transition-all"
        onClick={handleClick}
      >
        Calculate
      </button>

      {(error || answer) && (
        <div className="mt-8">
          <p
            className={`${
              error ? "text-red-500" : "text-green-500"
            } font-semibold text-xl text-center bg-slate-300 w-full max-w-[460px] mx-auto rounded-md p-4`}
          >
            {answer || error}
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
