import React from "react";
import "./Preview.css";

function Preview({ feedback, party, ratings, ratingValue }) {
  const rating = () => {
    return ratingValue
      ? ratings[ratingValue - 1]
      : { emoji: "", text: "No rating" };
  };

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label={rating().text + " Emoji"}>
            {rating().emoji}
          </span>
        </div>
        <div className="preview-feedback">
          {feedback ? (
            feedback
          ) : (
            <span className="placeholder">
              Let us know what we did well or could improve...
            </span>
          )}
        </div>
        <div className="preview-party">
          {party ? party : <span className="placeholder">2</span>} people dined
          here
        </div>
        <div>Rating: {ratingValue}</div>
      </div>
    </section>
  );
}

export default Preview;
