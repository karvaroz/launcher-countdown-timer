import CountDown from "./components/CountDown";

function App() {
  return (
    <>
      <div className="container">
        <div className="stars">
          <img src="./images/bg-stars.svg" alt="" />
        </div>
        <h1>We're launching soon</h1>
        <CountDown timeStamp={1659983662000} />
        <div className="socials">
          <ul>
            <li>
              <img src="./images/icon-facebook.svg" alt="" />
            </li>
            <li>
              <img src="./images/icon-pinterest.svg" alt="" />
            </li>
            <li>
              <img src="./images/icon-instagram.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="hills">
          <img src="./images/pattern-hills.svg" alt="" />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/karvaroz" rel="noopener noreferrer">
          Karvaroz
        </a>
        .
      </div>
    </>
  );
}

export default App;
