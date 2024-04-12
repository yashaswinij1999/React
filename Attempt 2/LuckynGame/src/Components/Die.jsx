import "./Die.css";

export default function Die() {
  const randomValue = Math.floor(Math.random() * 6) + 1;

  return (
    <>
      <div className="box">{randomValue}</div>
    </>
  );
}
