import "./App.css";
// import { useState } from "react";
import Apple from "./components/apple";

function App() {
  // const [className, setClassName] = useState("square_lg-green");

  return (
    <>
      <Apple className="square_lg-green"></Apple>
      <div>
        <div className="text-box">
          <input
            type="text"
            id="text-box_input"
            placeholder="petr999@example.com"
          />
        </div>
        <div className="some-message">Мы вас не узнали. Представьтесь</div>
      </div>
      <div className="project-desc">
        ВЯблочко - система контроля прогресса выполнения задач
      </div>
    </>
  );
}

export default App;
