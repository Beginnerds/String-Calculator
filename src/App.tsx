import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./components/calculator/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen bg-slate-800 flex justify-center items-center">
        <Calculator />
      </div>
    </>
  );
}

export default App;
