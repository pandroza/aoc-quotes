import React from "react";
import "./index.css";

import doodle from "./doodle";

const gridSize = 2;
const gridGap = "2";

const background = () => "red";

const FancyDoodle = doodle`
  :doodle {
    @grid: ${gridSize} / 200px;
    grid-gap: ${gridGap}px;
  }
  background: @pick(${background}, pink);
`;

export default function App() {
  return (
    <div className="App">
      <FancyDoodle />
    </div>
  );
}