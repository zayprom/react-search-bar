import React from "react";

const Inputs = ({ filteredInputs }) => {
  return (
    <div className="input-area">
      <div className="inputs-flex">
        {filteredInputs.map((input) => (
          <div key={input.id} className="input-item">
            <h2 className="input-heading">{input.name}</h2>
            <p className="input-content">{input.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inputs;
