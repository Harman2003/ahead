import React from "react";

const Card = ({ item }) => {
  const { icon, head, text, bgColor, color, istilt } = item;
  return (
    <div
      className="bg-yellow-700/30 w-80 min-w-[320px] h-60 rounded-3xl p-10 flex flex-col gap-3 overflow-clip"
      style={{
        backgroundColor: bgColor,
        color: color,
        transform:  istilt?"rotate(-5deg)":"" ,
      }}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-lg font-bold">{head}</div>
      <div>{text}</div>
    </div>
  );
};

export default Card;
