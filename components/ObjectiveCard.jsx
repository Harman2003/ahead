import React from 'react'

const ObjectiveCard = ({item}) => {
  const { head, text } = item;
  return (
    <div
      className="bg-white shadow-md w-96 min-h-[250px] rounded-3xl p-10 flex flex-col gap-3 overflow-clip"
    >
      <div className="text-lg font-bold">{head}</div>
      <div>{text}</div>
    </div>
  );
};

export default ObjectiveCard
