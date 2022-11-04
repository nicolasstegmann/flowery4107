import { useState } from "react";
import { Button } from "../Button";

import "./Counter.scss"

export const Counter = ({ stock, buttonText, onButtonClick }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleRemove = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      {stock ?
        <div className="counterContainer">
          <div className="counterContainer__top">
          <Button
              onClick={handleRemove}
              className="icon"
              rightIcon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>}
            />
            <div className="counterContainer__top__counter">{counter}</div>
            <Button
              onClick={handleAdd}
              className="icon"
              leftIcon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
            />
          </div>
          <div className="counterContainer__botton">
            <Button
                onClick={() => onButtonClick(counter)}
                className="button"
                disabled={!counter}
              >
              {buttonText}
              </Button>
          </div>
        </div>
        : null}
    </>
  );
};
