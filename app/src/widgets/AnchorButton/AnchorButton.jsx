import React from "react";
import "./AnchorButton.css";

export default function AnchorButton({ children, ...props }) {
  return (
    <button className="anchor_button" {...props}>
      {children}
    </button>
  );
}
