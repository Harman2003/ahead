"use client";
import { Button } from "@material-tailwind/react";
import { FaApple as AppleIcon } from "react-icons/fa";
import { BsStarFill as StarIcon } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import { herotext } from "../utils/motion";
const Hero = () => (
  <section className="section px-20 pb-20">
    <div className="h-full bg-[rgb(233,228,239)] rounded-3xl flex">
      <div className="flex items-center flex-col gap-4 justify-center flex-1 h-full ">
        <motion.div
          variants={herotext}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="">Ahead app</div>
          <div className="text-5xl font-bold">
            <div className="whitespace-nowrap">Master your life</div>
            <div className="whitespace-nowrap">by mastering</div>
            <div className="whitespace-nowrap">emotions</div>
          </div>
        </motion.div>
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
        <motion.div
          className="border-dashed border-2 border-spacing-14 border-white w-[500px] h-[500px] rounded-full flex items-center justify-center relative"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="b rounded-full w-[400px] h-[400px] flex items-center justify-center bg-purple-800/10"
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image src="/mobile.svg" width={300} height={300} />
          </motion.div>
          <motion.div
            className="absolute top-[calc(50%-50px)] right-[calc(100%-50px)] h-[100px] w-[100px]"
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image src="/hi.png" width={100} height={100} />
          </motion.div>
          <motion.div
            initial={{ x: "50%", y: "-50%" }}
            animate={{
              rotate: -360,
              x: "50%",
              y: "-50%",
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-1/2  h-[100px] w-[100px]"
          >
            <Image src="/witch.png" width={100} height={100} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            
            className="absolute top-[calc(100%-40px)] right-1/2 -translate-y-1/2 h-[100px] w-[100px]"
          >
            <Image src="/pumpkinHat.png" width={100} height={100} />
          </motion.div>
          <motion.div
            initial={{ x: "50%" }}
            animate={{ rotate: -360, x: "50%" }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 right-0 h-[100px] w-[100px]"
          >
            <Image src="/bat.png" width={100} height={100} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
