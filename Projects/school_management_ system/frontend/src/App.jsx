import { useEffect, useState } from "react";
import "./Sayari.css";

const shayariList = [
  " Mohabbat sirf baatein nahi, ehsaas hota hai.",
  "Kuch log dil mein bas jaate hain.",
  "Yaadein kabhi saath chhod kar nahi jaati.",
  "Dil ke dard ko lafzon mein kehna mushkil hota hai.",
  "Khamoshi bhi ek kahani hoti hai.",
  "Har muskaan ke peeche ek dard hota hai.",
  "Waqt sab kuch sikha deta hai.",
  "Dil jo chahe, woh mil jaaye zaroori nahi.",
  "Kuch rishte lafzon se nahi, ehsaas se bante hain.",
];

function App() {
  const [text, setText] = useState("");
  const [currentShayari, setCurrentShayari] = useState("");

  const generateShayari = () => {
    const random =
      shayariList[Math.floor(Math.random() * shayariList.length)];
    setCurrentShayari(random);
    setText("");
  };

  useEffect(() => {
    if (!currentShayari) return;

    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + currentShayari[index]);
      index++;
      if (index >= currentShayari.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [currentShayari]);

  return (
    <div className="shayari-container">
      <h1 className="title">💫 Shayari Generator</h1>
      <p className="subtitle">Simple Dil Ki Baatein</p>

      <div className="shayari-box">
        <pre className="typing-text">{text}</pre>
      </div>

      <button onClick={generateShayari} className="btn">
        ✨ New Shayari
      </button>
    </div>
  );
}

export default App;
