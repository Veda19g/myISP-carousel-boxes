import React from "react";
import "./Boxes.css";

const Box = ({ title, subtitles, lists }) => {
  const [boxStates, setBoxStates] = React.useState(subtitles.map(() => false));

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
          <div className={!boxStates[index] ? "bar" : "bar-maximized"} key={index}>
            <div className="bar-content">
              <span>{subtitle}</span>
              <button onClick={() => toggleMinimize(index)}>
                {!boxStates[index] ? "-" : "+"}
              </button>
            </div>
            {boxStates[index] && (
              <div className="list-links">
                <ul>
                  {lists[index].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Boxes = () => {
  const privateOrgLists = ["A", "B", "C"];
  const applicantCornerLists = ["D", "E", "F"];
  const instituteCornerLists = ["G", "H", "I"];
  const officersCornerLists = ["J", "K", "L"];

  return (
    <section className="boxes-section">
      <Box
        title="🏬Private Organization"
        subtitles={["Login", "Private Org Information"]}
        lists={[...privateOrgLists]}
      />
      <Box
        title="👤 Applicant Corner"
        subtitles={["Login", "Scheme Information"]}
        lists={[...applicantCornerLists]}
      />
      <Box
        title="🏛️Institute Corner"
        subtitles={["Login", "Institute Information"]}
        lists={[...instituteCornerLists]}
      />
      <Box
        title="👮 Officer's Corner"
        subtitles={["Login", "Officer's Information"]}
        lists={[...officersCornerLists]}
      />
      <div className="box">
        <div className="box-heading">👥 Public Corner</div>
        <div className="box-content"></div>
      </div>
    </section>
  );
};

export default Boxes;
