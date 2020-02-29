import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Form from "./Form.js";
import Preview from "./Preview.js";

function App() {
  const [feedback, setFeedback] = useState("");
  const [party, setParty] = useState(0);

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="app-left">
          <Form setFeedback={setFeedback} setParty={setParty} />
        </section>
        <section className="app-right">
          <Preview feedback={feedback} party={party} />
        </section>
      </main>
    </div>
  );
}

export default App;
