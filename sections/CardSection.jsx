"use client";
import React, { useEffect, useRef } from "react";
import { text1 } from "../constants";
import { text2 } from "../constants";
import Card from "../components/Card";
import { cardData } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { appearingText } from "../utils/motion";
const CardSection = () => {
  const ref = useRef(null);
  const dummyref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      console.log("came");
      let count = dummyref.current.offsetLeft - ref.current.scrollLeft;
      console.log(count);
      ref.current?.scrollBy({ left: count, behaviour: "smooth" });
    }
  }, [isInView]);
  return (
    <div className="section grid grid-rows-[40%,60%]">
      <div className="grid grid-cols-[40%,25%,25%] justify-between w-full mt-6 px-20">
        <div className="font-bold text-3xl text-center">EQ beats IQ</div>
        <div className="flex-1 text-gray-600 font-medium">{text1}</div>
        <div className="flex-1 text-gray-600 font-medium">{text2}</div>
      </div>
      <div>
        <motion.div
          variants={appearingText}
          className=" font-bold text-4xl pl-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Does this sound familiar...
        </motion.div>
        <motion.div
          ref={ref}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          transition={10}
          className="px-10 my-16 flex items-center gap-10 w-[100vw] h-72 overflow-x-scroll"
        >
          {cardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          <div ref={dummyref}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardSection;
