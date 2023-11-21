import React, { useState } from "react";


function Font() {
  const [font, setfont] = useState(16);

  const [variable, setvar] = useState({ fontSize: "16px" });
  const Decrease = () => {
    setfont(font - 10);
    setvar({
      fontSize: font + "px",
    });
  };
  const Increase = () => {
    setfont(font + 10);
    setvar({
      fontSize: font + "px",
    });
  };
  return (
    <div className='division'>
      <button className="Increase" variant="contained" onClick={Increase}>Increase</button><tab> </tab>
      <button className="Decrease" onClick={Decrease}>Decrease</button>
      <p style={variable}>Text with adjustable size</p>
    </div>
  );
}

export default Font;