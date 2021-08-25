import "./App.css";
import { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

function App() {
  const [input, setInput] = useState("");
  const componentRef = useRef();
  return (
    <>
      <main>
        <div className="sidebar">
          <input
            className="input"
            placeholder="Enter your name"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <button
            disabled={input === ""}
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(componentRef);
            }}
          >
            Download
          </button>
        </div>
        <div className="mainbar" ref={componentRef}>
          <h1>{input}</h1>
          <img
            className="image1"
            src="https://i.imgur.com/xa3WSGC.png"
            alt="certificate"
          />
        </div>
      </main>
      <footer>
        <h1 className="notes">Made with ❤️ by Shubham</h1>
      </footer>
    </>
  );
}

export default App;
