import { useEffect, useState } from "react";

export default function Test({ data }) {
  //   const person = {
  //     name: "rama",
  //     age: 10,
  //   };
  //   const data = JSON.stringify(person);
  //   localStorage.setItem("users", data);
  //   const val = localStorage.getItem("users");
  //   console.log(JSON.parse(val));
  //   console.log(localStorage);

  console.log(data);

  const [intialData, setData] = useState(() => {
    return Array.from({ length: data.length }, (el, index) => {
      const val = localStorage.getItem(`${index}`);
      const value = JSON.parse(val);
      return value;
    });
  });

  console.log("data", intialData);

  useEffect(() => {
    data.map((el, index) => {
      const element = JSON.stringify(el);
      localStorage.setItem(`${index}`, element);
      console.log(localStorage);
    });
  }, [intialData]);

  return (
    <>
      <ul>
        {intialData.map((el, index) => (
          <li
            key={index}
            onClick={() => {
              deleteItem(index);
            }}
          >
            {el.task}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
