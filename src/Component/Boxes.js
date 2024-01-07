import React from "react";
import "./Boxes.css";

const Box = ({ title, items }) => {
  const [boxStates, setBoxStates] = React.useState(items.map(() => false));

  const toggleMinimize = (index) => {
    setBoxStates((prevStates) => {
      const newBoxStates = [...prevStates];
      newBoxStates[index] = !newBoxStates[index];
      return newBoxStates;
    });
  };

  return (
    <div className="box">
      <div className="box-heading">{title}</div>
      <div className="box-content">
        {items.map(({ subtitle, list }, index) => (
          <div className={!boxStates[index] ? "bar" : "bar-maximized"} key={index}>
            <div className="bar-content">
              <span>{subtitle}</span>
              <button onClick={() => toggleMinimize(index)}>
                {!boxStates[index] ? "-" : "+"}
              </button>
            </div>
            {boxStates[index] && list && (
              <div className="list-links">
                <ul>
                  {list.map((item, i) => (
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
  const data = [
    {
      title: "🏬Private Organization",
      items: [
        { subtitle: "Login", list: ["A", "B", "C"] },
        { subtitle: "Private Org Information", list: ["D", "E", "F"] },
      ],
    },
    {
      title: "👤 Applicant Corner",
      items: [
        { subtitle: "Login", list: ["G", "H", "I"] },
        { subtitle: "Scheme Information", list: ["J", "K", "L"] },
      ],
    },
    {
      title: "🏛️Institute Corner",
      items: [
        { subtitle: "Login", list: ["M", "N", "O"] },
        { subtitle: "Institute Information", list: ["P", "Q", "R"] },
      ],
    },
    {
      title: "👮 Officer's Corner",
      items: [
        { subtitle: "Login", list: ["S", "T", "U"] },
        { subtitle: "Officer's Information", list: ["V", "W", "X"] },
      ],
    },
  ];

  return (
    <section className="boxes-section">
      {data.map(({ title, items }, index) => (
        <Box key={index} title={title} items={items} />
      ))}
      <div className="box">
        <div className="box-heading">👥 Public Corner</div>
        <div className="box-content"></div>
      </div>
    </section>
  );
};

export default Boxes;
