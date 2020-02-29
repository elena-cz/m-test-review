import React from "react";
import "./Form.css";

function Form({ setFeedback, setParty, ratings, ratingValue, setRatingValue }) {
  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea
        className="form-textarea"
        name="feedback"
        rows="4"
        onChange={e => setFeedback(e.target.value)}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={e => setParty(e.target.value)}
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>

      <div className="form-rating-container">
        {ratings.map(({ value, emoji, text }) => {
          const id = "rating" + value;
          const isSelected = ratingValue === value;

          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              id={id}
              name="rating"
              value={value}
              className={`form-rating ${
                isSelected ? "form-rating--selected" : ""
              }`}
              onClick={e => setRatingValue(isSelected ? null : value)}
            >
              <span role="img" aria-label={text} className="form-rating-emoji">
                {emoji}
              </span>
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
