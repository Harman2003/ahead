"use client";
import { motion } from "framer-motion";
import WinnerIcon from "../components/winnerIcon";
import { insightDots, insightText } from "../utils/motion";
const Insights = () => (
  <section className="section px-20 pb-20">
    <div className="h-full bg-blue-50 rounded-3xl mt-5 px-20 py-10 grid grid-rows-[30%,30%,40%]">
      <div className=" flex flex-col gap-4 items-center justify-center">
        <div>
          Let your friends, family and co-workers (anonymously) rate your social
          skills
        </div>
        <div className="text-4xl font-bold">
          Ever wondered what other think of you?
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full h-[2px] bg-yellow-700 mx-44 flex relative">
          <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2">
            <WinnerIcon text={1} />
          </div>
          <motion.div
            variants={insightText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-8 -left-36 -translate-x-1/2 max-w-[300px] text-center"
          >
            Answer questions on your social skills
          </motion.div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <WinnerIcon text={2} />
          </div>
          <motion.div
            variants={insightText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-8 left-[calc(50%-144px)] -translate-x-1/2  max-w-[300px] text-center"
          >
            Let others answer the same question anonymously about you
          </motion.div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 max-w-[300px] text-center">
            <WinnerIcon text={3} />
          </div>
          <motion.div
            variants={insightText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-8 -right-36 translate-x-1/2 max-w-[300px]"
          >
            Find out where you and others see things the same way - and where
            not!
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-1/2 bg-white px-20 h-full rounded-3xl flex justify-center items-center">
          <div className="relative w-full h-fit">
            {/* Horizontal line */}
            <div className="absolute left-0 w-[calc(100%-0px)] h-[2px] bg-gray-300 top-1/2 -translate-y-1/2 -z-0"></div>

            {/* Timeline dots */}
            <div className="flex justify-between items-center w-full ">
              <motion.div
                variants={insightDots}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-4 h-4 rounded-full bg-purple-500 z-10 relative"
              >
                <div className="absolute -top-12 -translate-x-[80%] bg-purple-500 text-white px-3 py-2 rounded-lg">
                  You
                </div>
              </motion.div>
              <motion.div
                variants={insightDots}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-4 h-4 rounded-full bg-blue-500 z-10 relative"
              >
                <div className="absolute top-8 bg-blue-500 text-white px-3 py-2 rounded-lg whitespace-nowrap">
                  Anonymonos 1
                </div>
              </motion.div>
              <motion.div
                variants={insightDots}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-4 h-4 rounded-full bg-yellow-700 z-10 relative"
              >
                <div className="absolute -top-12 bg-yellow-700 text-white px-3 py-2 rounded-lg whitespace-nowrap">
                  Anonymonos 2
                </div>
              </motion.div>
              <motion.div
                variants={insightDots}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-4 h-4 rounded-full bg-green-500 z-10 relative"
              >
                <div className="absolute top-8 bg-green-500 text-white px-3 py-2 rounded-lg whitespace-nowrap">
                  Anonymonos 1
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Insights;
