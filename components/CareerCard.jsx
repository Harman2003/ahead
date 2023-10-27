"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
const CareerCard = ({ item }) => {
  const { head, data } = item;
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
      <motion.div className="bg-orange-50 w-96 rounded-3xl p-6 flex flex-col gap-3 overflow-hidden" animate={{
          height: open ? 250 : 180,
    }}>
      <div className="text-lg font-semibold whitespace-nowrap">{head}</div>
      <div
        className="flex flex-col gap-2 text-md font-medium items-start border-b-0"
        onMouseEnter={() => handleOpen(1)}
        onMouseLeave={() => handleOpen(0)}
      >
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}

      {open === 1 && (
          <Button className="mt-5 w-fit self-end rounded-full">
          See Details
        </Button>
      )}
      </div>
    </motion.div>
  );
};

export default CareerCard;
