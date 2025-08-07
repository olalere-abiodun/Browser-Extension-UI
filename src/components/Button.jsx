import React from "react";

function Button({ className, mode, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {mode}
    </button>
  );
}

export default Button;
