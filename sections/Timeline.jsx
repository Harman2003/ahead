"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import React from "react";
import { timelineData } from "../constants";
import { appearingText } from "../utils/motion";
const Page = () => {

  return (
    <div className="section grid grid-rows-[25%,75%]">
      <motion.div
        className="flex flex-col justify-center gap-3 px-20"
        variants={appearingText}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>Wrong with self-improvement & how we're fixing it</div>
        <div className="text-4xl font-bold">Self Improvements. Ugh</div>
      </motion.div>
      <div className="overflow-scroll">
        <Timeline className="flex items-center">
          <div className="w-1/2">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} className="pb-20">
                <TimelineConnector>
                  <span className="w-0.5 h-full bg-[rgb(99,28,221)]"></span>
                </TimelineConnector>
                <TimelineHeader className="h-3">
                  <TimelineIcon className="relative">
                    <div className="w-full h-full bg-[rgb(99,28,221)] absolute top-0 left-0"></div>
                  </TimelineIcon>

                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    {item.head}
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    {item.text}
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            ))}
          </div>
        </Timeline>
      </div>
    </div>
  );
};

export default Page;
