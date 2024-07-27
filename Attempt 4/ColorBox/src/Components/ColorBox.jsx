import Box from "./Box";
import "./ColorBox.css";

function ColorBox() {
  const colorBox = [];

  for (let i = 1; i <= 25; i++) {
    colorBox.push(<Box />);
  }

  return (
    <div className="container">
      {colorBox.map((el) => (
        <div key={el.index}>{el}</div>
      ))}
    </div>
  );
}

export default ColorBox;
