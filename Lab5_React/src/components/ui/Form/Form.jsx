import React, { useState } from "react";

export default function Form() {
  const [divs, setDivs] = useState([]);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiv = (
      <div
        key={divs.length} // Ensure each div has a unique key
        style={{
            width: parseInt(width, 10),
            height: parseInt(height, 10),
          backgroundColor: backgroundColor,
          border: "2px solid black",
          margin: "10px", // Optional: Add margin between divs
        }}
      >
     
      </div>
    );
    setDivs([...divs, newDiv]);
    // Clear input values
    setWidth("");
    setHeight("");
    setBackgroundColor("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="height"
          type="text"
        />
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="width"
          type="text"
        />
        <input
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          placeholder="background color"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>

      <div style={{ border: "2px solid black" }}>
        Targeted div
        {divs.map((div) => div)}
      </div>
    </>
  );
}