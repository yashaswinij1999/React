import Die from "./Die";
import "./Dice.css";

export default function Dice({ dice }) {
  return (
    <div className="main">
      {dice.map((el, i) => (
        <Die key={i} val={el} />
      ))}
    </div>
  );
}
