import "./Die.css";

export default function Die({ val, color = "purple" }) {
  return (
    <>
      <div className="head">
        <div style={{ backgroundColor: color }} className="die">
          {val}
        </div>
      </div>
    </>
  );
}
