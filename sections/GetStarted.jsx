'use client';

import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const GetStarted = () => (
  <section className="section flex flex-col items-center justify-center gap-6">
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: [0.8, 1.1, 1] }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 items-center"
    >
      <div>We take privacy seriously</div>
      <div className="text-3xl font-bold">Before you get started</div>
      <div className=" font-bold">
        {
          "\"We won't share your answers with anyone (and won't ever tell you which friends said what about you)\""
        }
      </div>
      <div className="text-lg">with love, Team ahead</div>
    </motion.div>
    <motion.div
      initial={{ scale: 0.1 }}
      whileInView={{ scale: [0.1, 1.1, 1] }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <Button className="rounded-full normal-case text-md font-normal">
        Start a test
      </Button>
    </motion.div>
    <div>Take only 5 minutes</div>
  </section>
);

export default GetStarted;
