"use client";
import { FaApple as AppleIcon } from "react-icons/fa";
import { MdLocationOn as LocationIcon } from "react-icons/md";
import { MdEmail as EmailIcon } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { careerData } from "../constants";
import CareerCard from "./CareerCard";
import Image from "next/image";
const Footer = () => (
  <div className="section grid grid-rows-[10%,55%,35%]">
    <div className="text-4xl font-bold mx-20">Open Vacancies</div>
    <div className="h-full w-full flex justify-center gap-8 py-20">
      {careerData.map((item, index) => (
        <CareerCard key={index} item={item} />
      ))}
    </div>
    <div className="flex flex-col items-center gap-10">
      <hr className="w-full border-[1px] " />
      <div className="w-[50px]">
        <Image src="/aheadLogo.png" width={100} height={100} />
      </div>
      <div className="flex gap-10">
        <div className="flex items-center gap-2">
          <LocationIcon size={24} />
          <div className="whitespace-nowrap">AuguststraBe 21, 10117 Berlin</div>
        </div>
        <div className="flex items-center gap-2">
          <EmailIcon size={24} />
          <div>hi@ahead-app.com</div>
        </div>
      </div>
      <Button className="flex gap-3 items-center normal-case px-2 py-1">
        <AppleIcon size={32} />
        <div>
          <div className="whitespace-nowrap text-xs font-thin">
            Download on the
          </div>
          <div className="text-lg">App Store</div>
        </div>
      </Button>
    </div>
  </div>
);

export default Footer;
