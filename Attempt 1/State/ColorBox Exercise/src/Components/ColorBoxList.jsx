import ColorBox from "./ColorBox";
import "./ColorBoxList.css";

export default function ColorBoxList({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }

  return <div className="container">{boxes}</div>;
}
