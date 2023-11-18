import { useState } from "react";

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  // console.log(text)
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "50vh",
        width: "22vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}
    >
      <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
      <textarea
        style={{
          width: "30rem",
          // border: "2px solid red ",
          height: "30rem",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
          resize: "none",
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <img
        src="./assets/pen.png"
        alt=""
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          bottom: "17px",
          right: "10px",
        }}
      />
    </div>
  );
};

export default Notes;
