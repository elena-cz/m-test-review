import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Form from "./Form.js";
import Preview from "./Preview.js";

function App() {
  const [feedback, setFeedback] = useState("");
  const [party, setParty] = useState(0);
  const [ratingValue, setRatingValue] = useState(null);

  const ratings = [
    { value: 1, emoji: "🙁", text: "Bad" },
    { value: 2, emoji: "😐", text: "OK" },
    { value: 3, emoji: "🙂", text: "Good" },
    { value: 4, emoji: "😍", text: "Amazing" }
  ];

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="app-left">
          <Form
            setFeedback={setFeedback}
            setParty={setParty}
            ratings={ratings}
            ratingValue={ratingValue}
            setRatingValue={setRatingValue}
          />
        </section>
        <section className="app-right">
          <Preview
            feedback={feedback}
            party={party}
            ratings={ratings}
            ratingValue={ratingValue}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
