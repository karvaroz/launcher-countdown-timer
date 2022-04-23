function App() {
  return (
    <>
      <div className="container">
        <div className="stars">
          <img src="./images/bg-stars.svg" alt="" />
        </div>
        <h1>We're launching soon</h1>
        <div className="countdown">
          <div>
            <p>00</p>
            <h3>Days</h3>
          </div>
          <div>
            <p>00</p>
            <h3>Hours</h3>
          </div>
          <div>
            <p>00</p>
            <h3>Minutes</h3>
          </div>
          <div>
            <p>00</p>
            <h3>Seconds</h3>
          </div>
        </div>
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

      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/karvaroz" rel="noreferrer">
          Karvaroz
        </a>
        .
      </div>
    </>
  );
}

export default App;
