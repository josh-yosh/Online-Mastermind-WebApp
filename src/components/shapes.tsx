import React from "react";

// to return back

const Circle: React.FC = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        borderRadius: "50%", // makes it a circle
      }}
    />
  );
};

export default Circle;