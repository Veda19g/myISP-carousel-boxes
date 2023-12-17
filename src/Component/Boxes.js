import React, { useState } from "react";
import "./Boxes.css";

const Box = ({ title, subtitles }) => {
  const [boxStates, setBoxStates] = useState(subtitles.map(() => false));

  const toggleMinimize = (index) => {
    const newBoxStates = [...boxStates];
    newBoxStates[index] = !newBoxStates[index];
    setBoxStates(newBoxStates);
  };

  return (
    <div className="box">
      <div className="box-heading">{title}</div>
      <div className="box-content">
        {subtitles.map((subtitle, index) => (
          <div className="bar" key={index}>
            <span>{subtitle}</span>
            <button onClick={() => toggleMinimize(index)}>
              {!boxStates[index] ? "-" : "+"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Boxes = () => {
  return (
    <section className="boxes-section">
      <Box
        title="🏬Private Organization"
        subtitles={["Login", "Private Org Information"]}
      />
      <Box
        title="👤 Applicant Corner"
        subtitles={["Login", "Scheme Information"]}
      />
      <Box
        title="🏛️Institute Corner"
        subtitles={["Login", "Institute Information"]}
      />
      <Box
        title="👮 Officer's Corner"
        subtitles={["Login", "Officer's Information"]}
      />
      <div className="box">
        <div className="box-heading">👥 Public Corner</div>
        <div className="box-content"></div>
      </div>
    </section>
  );
};

export default Boxes;
