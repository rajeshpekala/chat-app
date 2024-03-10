import { useState } from "react";
import Features from "./components/Features";

export const Header = () => {
const [feature, Setfeature] = useState(false);
const [bgColor, SetBgColor] = useState("bg-black");
const [textColor, SetTextColor] = useState("text-white");
const [op, SetOp] = useState("opacity-75");

const handlefeature = () =>{
    Setfeature(!feature);
    SetBgColor(feature ? "bg-black" : "bg-blue-400");
    SetTextColor(feature?"text-white":"text-black");
    SetOp(feature ? "opacity-75" : "opacity-100");
}

    const elements = [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "Blog",
      },
      {
        id: 3,
        name: "Contact Us",
      },

    ];

  return (
    <div
      className={`bg-black shadow-lg fixed w-full ${op} ${bgColor} ${textColor}`}
    >
      <ul className=" flex py-6  mx-6 justify-center">
        {elements.map((element) => (
          <li
            key={element.id}
            className=" text-2xl font-bold px-4 mx-4 hover:scale-110 duration-300 hover: cursor-pointer hover:bg-green-400 rounded-lg"
          >
            {element.name}
          </li>
        ))}
        <li className=" text-2xl font-bold px-5 bg-green-300 rounded-md mr-3 hover: cursor-pointer hover:scale-110 duration-300">
          Register
        </li>
        <button
          className=" text-2xl font-bold px-5  rounded-md"
          onClick={handlefeature}
        >
          Features{feature ? "🔼" : "🔽"}
        </button>
      </ul>
      {feature && <Features />}
    </div>
  );
}
