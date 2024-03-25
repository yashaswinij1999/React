export default function Die() {
  const random = Math.floor(Math.random() * 6);

  return (
    <>
      <p>Die : {random}</p>
    </>
  );
}
