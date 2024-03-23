export default function Clicker(props) {
  const { message, btnText } = props;

  return (
    <form>
      <button
        onClick={() => {
          alert(message);
        }}
      >
        {btnText}
      </button>
    </form>
  );
}
