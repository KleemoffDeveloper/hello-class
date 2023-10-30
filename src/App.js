import { useState } from "react";

function App() {
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="App">
      {showTime ? (
        <div>
          <div className="clock"></div>
        </div>
      ) : (
        <div className="message">
          <h1>Hello 9.6!</h1>
          <button
            onClick={() => {
              setShowTime(true);
            }}
          >
            Check the time
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
