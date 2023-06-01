import React from "react";
import { useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";
import { RatRace } from "../RatRace/RatRace";

const fonts = {
  google: {
    families: ["Cabin Sketch", "Roboto Condensed", "Fira Code"],
  },
};

function App() {
  useEffect(() => {
    WebFont.load(fonts);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rat Race 🐀</h1>
      </header>
      <main>
        <h2>Welcome to the Afterlife Casino!</h2>
        <p>Please gamble responsibly.</p>
        <RatRace />
      </main>
    </div>
  );
}

export default App;
