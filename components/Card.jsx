"use client";

import Image from "next/image";
import { useState } from "react";

const Card = ({ heading, icon, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prev, setPrev] = useState(null);

  return (
    <div
      className="bg-violet-500 hover:bg-yellow-500 w-[400px] transition-all h-fit shadow-2xl"
      onMouseEnter={() => setIsHovered(!isHovered)}
    >
      <div className="flex flex-col items-center m-5">
        <Image
          src={icon}
          width={100}
          height={100}
          alt="card-icon"
          className="cursor-pointer object-contain mt-5"
        />

        <h1 className="text-center font-bold text-2xl mt-4 text-white">{heading}</h1>
      </div>

      <div
        className={`${
          isHovered ? "block" : "hidden"
        } p-5 transition-all bg-white`}
        onMouseLeave={() => setIsHovered((prev) => setPrev(prev))}
      >
        <p>{content}</p>

        <button className="mt-5 mb-2 py-2 px-4 border-2 border-black uppercase bold hover:bg-black hover:text-white transition-all">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
