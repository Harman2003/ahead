"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { appearingText2, bubbleIcon, witchIcon } from "../utils/motion";
const About = () => (
  <section className="section px-20 pb-20">
    <div className="h-full bg-purple-50 rounded-3xl flex mt-5 px-20 pt-36 relative overflow-hidden">
      {/* background animation start */}
      <motion.div
        variants={witchIcon}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        iv
        className="absolute bottom-1/4 left-[15%] w-52 h-52 bg-white/30 rounded-full p-5 z-10"
      >
        <motion.div
          whileInView={{ rotate: [60, 0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="w-full h-full bg-white rounded-full flex items-center justify-center"
        >
          <Image src="/witch.png" width={100} height={100} />
        </motion.div>
      </motion.div>
      <motion.div
        variants={bubbleIcon}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bg-purple-100/60 -bottom-16 -left-10 w-96 h-96 rounded-full"
      ></motion.div>
      <motion.div
        whileInView={{
          rotate: [0,90,45,60, 0],
        }}
        transition={{
          repeat:Infinity,
          duration: 2,
          ease: "linear",
        }}
        viewport={{ once: true }}
        className="absolute top-0 right-5 w-[100px] h-[100px]"
      >
        <Image src="/bat.png" width={100} height={100} />
      </motion.div>
      <motion.div
        whileInView={{
          rotate: [90, 0, 60, 10, 90],
        }}
        transition={{
          repeat:Infinity,
          duration: 2,
          ease: "linear",
        }}
        viewport={{ once: true }}
        className="absolute top-0 right-40 w-[100px] h-[100px]"
      >
        <Image src="/bat.png" width={100} height={100} />
      </motion.div>
      {/* background animation ends */}

      <motion.div
        className="flex flex-col gap-4 flex-1 h-full "
        variants={appearingText2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="">Built out of frustation</div>
        <div className="whitespace-nowrap text-5xl font-bold">
          Meet the ahead app
        </div>
      </motion.div>
      <div className="flex flex-col gap-8 items-center justify-center flex-1 h-full text-gray-600 font-medium">
        <div>
          Introducing a personalized pocket coach, a trusted companion that
          offers bite-sized, science-backed strategies to enhance your emotional
          intelligence. This innovative solution empowers you to navigate life's
          challenges with greater self-awareness and empathy, unlocking your
          full emotional potential.
        </div>
        <div>
          Think of it as your pocket cheerleader, always by your side, guiding
          you toward a more fulfilling, balanced, and emotionally intelligent
          life. With its support, you'll be better equipped to conquer obstacles
          and build more meaningful relationships, making every day a step
          towards a brighter future.
        </div>
      </div>
    </div>
  </section>
);

export default About;
