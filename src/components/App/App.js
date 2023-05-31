import { useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";

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
        <p>Body text here</p>
      </main>
    </div>
  );
}

export default App;
