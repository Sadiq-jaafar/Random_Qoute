import qoutes from "./qoutes.json";
import { useState } from "react";
import "./App.css";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Qoute {
  quote: string;
  author: string;
}

const getRandomQuote = (): Qoute => {
  return qoutes[Math.floor(Math.random() * qoutes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const App = () => {
  const [qoute, setQoute] = useState<Qoute>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  return (
    <div className="background" style={{ backgroundColor: randomColor }}>
      <div id="quote-box" style={{ borderRadius: "20px" }}>
        <div className="quote-content" style={{ color: randomColor }}>
          <FaQuoteLeft size={30} style={{ margin: "10px" }} />
          <h2 id="text">{qoute.quote}</h2>
          <FaQuoteRight size={30} style={{ margin: "10px" }} />
          <h4 id="author">{qoute.author}</h4>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${qoute.quote} - ${qoute.author}`}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: randomColor,
              alignContent: "center",
              padding: "10px",
            }}
          >
            <FaTwitter size={30} />
          </a>
          <button
            id="new-quote"
            onClick={() => {
              setQoute(getRandomQuote());
              setRandomColor(getRandomColor());
            }}
            style={{ backgroundColor: randomColor }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
