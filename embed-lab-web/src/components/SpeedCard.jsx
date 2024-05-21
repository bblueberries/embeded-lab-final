import React from "react";
import { speedThreshold } from "../data/threshold";
export default function SpeedCard({ value }) {
  let backgroundColor = "bg-green-200";
  let speed = value;
  let text = "";
  if (value > speedThreshold) {
    backgroundColor = "bg-red-400";
    text = "exceed limit";
  }
  return (
    <div className=" bg-gray-200 p-3 rounded-xl">
      <div
        className={`min-w-min max-w-full px-4 py-8 gap-10 rounded-lg shadow-md ${backgroundColor}`}
      >
        <div className="flex flex-col">
          <div className="text-center font-extrabold text-xl">
            Speed (m/s)
          </div>
          <div className="text-center font-bold text-4xl m-2">{speed}</div>
          <div className=" block text-center font-extrabold text-xl text-red-900 min-h-9">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
