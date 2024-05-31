import { useContext } from "react";
import { shopContext } from "../Hooks/ShoppingContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartItem() {
  const { state, dispatch } = useContext(shopContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="max-h-screen">
        {state.map((el) => (
          <div className=" flex justify-between items-center m-2  h-36 shadow-lg text-center">
            <div className="w-1/3 flex items-center justify-center ">
              <img className="w-28 h-32" src={el.image} />
            </div>
            <div className="w-1/2 h-32 p-2 flex justify-center items-center">
              <p>{el.title}</p>
            </div>
            <div className="w-1/3 h-32 flex items-center justify-center">
              <div className="p-2">
                <FaPlus />
              </div>
              <div className="p-2">{el.quantity}</div>
              <div className="p-2">
                <FaMinus />
              </div>
            </div>
          </div>
        ))}
        <div className="flex m-4 justify-center gap-2">
          <button
            className="p-2  bg-slate-600 text-white rounded-lg"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button
            className="p-2 bg-slate-600 text-white rounded-lg"
            onClick={() => navigate("/checkout")}
          >
            {" "}
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
