import React, { useState } from "react";
import Button from "./Button";
import buttonMode from "../mode.js";

function Title({ filter, setFilter }) {
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id, name) => {
    setActiveId(id);
    setFilter(name.toLowerCase()); // "all" | "active" | "inactive"
  };

  return (
    <div className="title">
      <h2>Extension List</h2>
      <div className="mode-group">
        {buttonMode.map((data) => (
          <Button
            key={data.id}
            className={`mode ${data.id === activeId ? "active" : ""}`}
            mode={data.name}
            onClick={() => handleClick(data.id, data.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Title;
