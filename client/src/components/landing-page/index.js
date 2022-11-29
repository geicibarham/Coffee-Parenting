import React, { useState } from "react";
import right from "../../assets/images/arrow.png";
import left from "../../assets/images/arrow-left.png";
import "./landing.css";
function Carousell(props) {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const items = [
    {
      description:
        "Parenting is hard! But you dont have to do it alone. Connect with other parents for a virtual coffee!",
      className: "image__1",
    },
    {
      description:
        "Because we Know parenting comes with a lot of reading, " +
        "we provide sources with information for different age groups!",
      className: "image__2",
    },
    {
      className: "image__3",
      description:
        "Expecting? Here you can generate and save random baby names!",
    },
  ];

  const First = () => {
    setFirst(false);
  };
  const next = () => {
    setSecond(true);
    setFirst(false);
  };
  const last = () => {
    setThird(true);
    setSecond(false);
    setFirst(false);
  };
  const back = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };
  const startAgain = () => {
    setThird(false);
    setFirst(true);
  };
  const startAgain2 = () => {
    setThird(false);
    setSecond(true);
  };
  return (
    <>

      {first && (
        <div className={items[0].className}>
          <span>{items[0].description}</span>

          <img
            id="right__arrow"
            onClick={next}
            height="70px"
            src={right}
            alt="right arrow"
          />
        </div>
      )}
      {second && (
        <>
          <div className={items[1].className}>
            <img
              id="left__arrow"
              onClick={back}
              height="70px"
              src={left}
              alt="right arrow"
            />
            <span>{items[1].description}</span>
            <img
              id="right__arrow"
              onClick={last}
              height="70px"
              src={right}
              alt="right arrow"
            />
          </div>
        </>
      )}
      {third && (
        <>
          <div className={items[2].className}>
            <img
              id="left__arrow"
              onClick={startAgain2}
              height="70px"
              src={left}
              alt="right arrow"
            />
            <span>{items[2].description}</span>
            <img
              id="right__arrow"
              onClick={startAgain}
              height="70px"
              src={right}
              alt="right arrow"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Carousell;
