export default function Die() {
  const random = Math.floor(Math.random() * 6);
  const style = { color: "green" };

  return (
    <>
      <p style={style}> Die Roll : {random}</p>
    </>
  );
}
