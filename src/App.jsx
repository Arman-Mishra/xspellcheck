import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  useEffect(() => {
    if (inputText) {
      detectTypo(inputText);
    }
  }, [inputText]);

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleInputChange = (e) => setInputText(e.target.value);

  const detectTypo = (text) => {
    setSuggestedText("");
    let arr = text.split(" ");

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() in customDictionary) {
        setSuggestedText(
          (prevState) => prevState + " " + customDictionary[`${arr[i]}`]
        );
        break;
      }
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
