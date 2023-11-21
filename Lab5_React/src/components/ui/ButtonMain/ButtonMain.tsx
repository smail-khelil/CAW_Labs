import { useState, MouseEvent } from "react";
import "./index.scss";
const ButtonMain = () => {
  // wich button was clicked 1,2,3 the number of the button change in the text
  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleClick2 = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "1") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setNum(+e.currentTarget.id);
  };

  return (
    <>
      <div className="MainButton">
        <h2>Exo1/Q3:</h2>
        <div className="textB">Button {num} was clicked</div>
        <div className="lineButton">
          <button id="1" onClick={handleClick}>
            Click1
          </button>
          <button id="2" onClick={handleClick}>
            Click2
          </button>
          <button id="3" onClick={handleClick}>
            Click3
          </button>
        </div>

        <h2>Exo1/Q4:</h2>
        {/* conter  */}

        <div className="textB">Counter</div>
        <div className="lineButton">
          <button id="1" onClick={handleClick2}>
            +
          </button>
          <h1>{counter}</h1>
          <button id="2" onClick={handleClick2}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonMain;
