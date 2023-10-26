"use client";
import { Button } from "@material-tailwind/react";
import { FaApple as AppleIcon } from "react-icons/fa";
import { BsStarFill as StarIcon } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ghost from "../public/ghost.json";
const Hero = () => (
  <section className="section px-20 pb-20">
    <div className="h-full bg-purple-50 rounded-3xl flex">
      <div className="flex items-center flex-col gap-4 justify-center flex-1 h-full ">
        <div className="">Ahead app</div>
        <div className="text-5xl font-bold">
          <div className="whitespace-nowrap">Master your life</div>
          <div className="whitespace-nowrap">by mastering</div>
          <div className="whitespace-nowrap">emotions</div>
        </div>
        <div className="flex gap-6">
          <Button className="flex gap-3 items-center normal-case px-2 py-1">
            <AppleIcon size={32} />
            <div>
              <div className="whitespace-nowrap text-xs font-thin">
                Download on the
              </div>
              <div className="text-lg">App Store</div>
            </div>
          </Button>
          <div>
            <div className="flex gap-3 mb-1">
              {Array(5).fill(<StarIcon className="text-yellow-700" />)}
            </div>
            <div className="text-sm">100+ AppStore reviews</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 h-full">
        <div
          className="border-dashed border-2 border-spacing-14 border-white w-[500px] h-[500px] rounded-full flex items-center justify-center relative"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            loop: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="b rounded-full w-[400px] h-[400px] flex items-center justify-center bg-purple-800/10"
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              loop: Infinity,
              ease: "linear",
            }}
          >
            <Image src="/mobile.svg" width={300} height={300} />
          </div>
          <div className="absolute top-1/2 right-full -translate-y-1/2 translate-x-1/2 h-32 w-32">
            <Lottie animationData={ghost} width={30} height={30}/>
          </div>
          <div className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 bg-blue-500 h-10 w-10">
            {/* <Lottie animationData={ghost} width={10} height={10} /> */}
          </div>
          <div className="absolute top-full right-1/2 -translate-y-1/2 bg-red-500 h-10 w-10">
            {/* <Lottie animationData={ghost} width={10} height={10} /> */}
          </div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 bg-gray-500 h-10 w-10">
            {/* <Lottie animationData={ghost} width={10} height={10} /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
