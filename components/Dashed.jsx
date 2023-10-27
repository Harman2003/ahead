import React from 'react'

const Dashed = ({children, className, color}) => {
    const properties = "flex gap-2 h-[2px] w-[100px] relative overflow-hidden" + className;
  return (
    <div className={properties}>
      {Array.from({ length: 100 }, (_, index) => (
        <span
          key={index + "span"}
          className="w-6 h-full"
          style={{ backgroundColor: color }}
        ></span>
      ))}
      {children}
    </div>
  );
}

export default Dashed
