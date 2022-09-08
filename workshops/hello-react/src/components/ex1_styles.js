import React from "react";
import "./styles.css";

export default function ex1_styles() {
  const styles = {
    container: { backgroundColor: "red" },
  };
  return (
    <div style={{ backgroundColor: "#F0F", height: 200 }}>
      <h1>Style Example</h1>
      <h1 style={styles.container}>Style Example</h1>
      <h1 className="root">Style Example</h1>
    </div>
  );
}
