import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Tanya from "./assets/images/image-tanya.jpg";
import John from "./assets/images/image-john.jpg";
import Prev from "./assets/images/icon-prev.svg";
import Next from "./assets/images/icon-next.svg";

function App() {
  const [currSlide, setCurrSlide] = useState(0);
  const [activeKey, setActiveKey] = useState(0);

  const data = [
    {
      quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
      name: "Tanya Sinclair",
      title: "UX Engineer",
      img: Tanya,
    },
    {
      quote: `  “ If you want to lay the best foundation possible I’d recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer. ”`,
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
      img: John,
    },
  ];

  const handleClick = (inc) => {
    // increment
    if (inc > 0) {
      if (currSlide + 1 >= data.length) {
        setCurrSlide(0);
      } else {
        setCurrSlide(currSlide + 1);
      }
    }
    // decrement
    else {
      if (currSlide - 1 < 0) {
        setCurrSlide(data.length - 1);
      } else {
        setCurrSlide(currSlide - 1);
      }
    }
  };

  const handleArrows = (e) => {
    e.preventDefault();

    if (e.keyCode === 37) {
      setActiveKey(-1);
    } else if (e.keyCode === 39) {
      setActiveKey(1);
    }

    // setTimeout(() => {
    //   setActiveKey(0);
    // }, 600);
  };

  useEffect(() => {
    if (activeKey !== 0) {
      handleClick(activeKey);
      setActiveKey(0);
    }
  }, [activeKey, handleClick]);

  useEffect(() => {
    window.addEventListener("keydown", handleArrows);

    return () => window.removeEventListener("keydown", handleArrows);
  }, []);

  return (
    <>
      <main className="main">
        <div className="testimonial">
          <p className="testimonial__quote">{data[currSlide].quote}</p>
          <div className="testimonial__person-container">
            <p className="testimonial__name">{data[currSlide].name}</p>
            <p className="testimonial__title">{data[currSlide].title}</p>
          </div>
        </div>
        <div className="hero">
          <img
            className="hero__img"
            src={data[currSlide].img}
            alt={`${data[currSlide].name} img`}
          ></img>
          <div className="slider">
            <div className="slider__wrapper" onClick={() => handleClick(-1)}>
              <img className="prev" src={Prev} alt="prev icon"></img>
            </div>
            <div className="slider__wrapper" onClick={() => handleClick(1)}>
              <img className="next" src={Next} alt="next icon"></img>
            </div>
          </div>
        </div>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
