import React from "react";
import "./Preview.css";

function Preview({ feedback, party }) {
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          😍
          {/* Your emoji code goes here */}
        </div>
        <div className="preview-feedback">
          {/* Let us know what we did well or could improve... */}
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
      </div>
    </section>
  );
}

export default Preview;
