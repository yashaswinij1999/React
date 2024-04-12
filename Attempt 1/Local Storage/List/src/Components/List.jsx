import { useEffect, useState } from "react";
import "./List.css";

export default function List({ data }) {
  const [intialData, setData] = useState(() => {
    return data.map((el, index) => {
      const storedData = localStorage.getItem(`todo${index}`, el);

      return storedData ? JSON.parse(storedData) : "no items present";
    });
  });

  console.log(intialData);

  useEffect(() => {
    data.forEach((element, index) => {
      localStorage.setItem(`todo${index}`, JSON.stringify(element));
    });
  }, [intialData]);

  const handleChange = function (id) {
    setData((prevData) => {
      return prevData.filter((el) => el.id !== id);
    });
  };

  return (
    <>
      <h1>List</h1>
      <ul>
        {intialData.map((el, index) => (
          <li
            key={index}
            onClick={() => {
              handleChange(el.id);
            }}
          >
            {el.task}
          </li>
        ))}
      </ul>
    </>
  );
}
