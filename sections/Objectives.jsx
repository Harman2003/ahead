"use client";
import React from "react";
import { objectiveData } from "../constants";
import ObjectiveCard from "../components/ObjectiveCard";
import { appearingText, appearingText2 } from "../utils/motion";
import { motion } from "framer-motion";

const Objectives = () => {
  return (
    <section className="section px-20 pb-5">
      <div className="h-full bg-blue-50 rounded-3xl mt-5 px-20 pt-10 grid grid-rows-[15%,85%]">
        <div className=" flex gap-4 items-center justify-between">
          <motion.div
            variants={appearingText2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Work with us
          </motion.div>
          <div className="text-4xl font-bold text-purple-800">ahead</div>
        </div>
        <div className=" grid grid-cols-[2fr,1fr] gap-40 justify-between">
          <div className=" pb-20">
            <div className="bg-white rounded-3xl ">
              <div className="flex flex-col gap-4 rounded-3xl p-10">
                <div>icon</div>
                <div className="font-bold text-lg">About</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eius, ipsum dolorem sunt quos quam culpa porro voluptatum non
                  hic architecto commodi adipisci vero doloribus labore minima
                  dolore atque quod accusamus facere corrupti, aut nostrum.
                  Commodi temporibus quod consectetur officiis sed quia minus
                  quidem reprehenderit, autem maxime exercitationem odio illum
                  mollitia vitae architecto quis? Sunt dolorum,
                </div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-10">
                <div className="mb-5 font-bold text-lg">Product</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  sit reiciendis aut ipsam, odio sapiente quibusdam, magni ut
                  tempore debitis modi laborum reprehenderit consectetur minus
                  cupiditate similique quam perspiciatis sint?
                </div>
              </div>
            </div>
          </div>
          <div className="show-scrollbar flex flex-col gap-8 overflow-y-scroll h-[95%]">
            {objectiveData.map((item, index) => (
              <ObjectiveCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
