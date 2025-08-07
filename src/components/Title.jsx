import React, { useState } from "react";
import Button from "./Button";
import buttonMode from "../mode.js";

function Title() {
  const [activeId, setActiveId] = useState(1); // Default active is "All"

  return (
    <div className="title">
      <h2>Extension List</h2>
      <div className="mode-group">
        {buttonMode.map((data) => (
          <Button
            key={data.id}
            className={`mode ${data.id === activeId ? "active" : ""}`}
            mode={data.name}
            onClick={() => setActiveId(data.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Title;
