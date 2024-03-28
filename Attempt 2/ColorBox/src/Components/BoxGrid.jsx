import Box from "./Box";
import "./BoxGrid.css";

export default function BoxGrid({ val }) {
  const Boxes = Array.from({ length: val });

  return (
    <>
      <div className="boxgrid">{Boxes.map((el) => (el = <Box />))}</div>
    </>
  );
}
