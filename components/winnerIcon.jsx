import React from 'react'
import Image from 'next/image';
const WinnerIcon = ({text}) => {
  return (
    <div>
      <Image src="/circle-wavy.svg" className="" width={60} height={60} />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-800 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white font-medium">
              <div>{text}</div>
      </div>
    </div>
  );
}

export default WinnerIcon
