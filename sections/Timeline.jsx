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

import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { timelineData } from "../constants";
const Page = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ container: ref });
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  // console.log(scrollY);
  return (
    <div className="section grid grid-rows-[25%,75%]">
      <div className="flex flex-col justify-center gap-3 px-20">
        <div>Wrong with self-improvement & how we're fixing it</div>
        <div className="text-4xl font-bold">Self Improvements. Ugh</div>
      </div>
      <div ref={ref} className="overflow-y-scroll">
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
