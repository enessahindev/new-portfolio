"use client";

// next image
import Image from "next/image";
// icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

// count up
import Brands from "./Brands";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/variants";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <Brands />
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/me.png"}
              width={400}
              height={400}
              alt="About Me"
            />
          </motion.div>
          {/* Text & Stats */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                ABOUT
              </motion.h2>
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                LEARN MORE ABOUT ME
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Hello, I'm Enes, while I mostly focus on front-end development,
                I also have some back-end knowledge. I'm trying to make the
                applications I write full stack so that I can learn back-end
                technologies while improving my front-end skills. While focusing
                on responsive and fluid design, I also try to improve my
                back-end skills in MERN projects. Apart from that, I follow the
                UI / UX designs up to date. I effectively use Adobe Photoshop,
                Adobe XD, Adobe Illustrator, CorelDraw and Figma programs in
                designs.
              </motion.p>
              {/* button */}
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-legendary-default hover:bg-primary rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                <a href={"/docs/Muhammet-Enes-Sahin-EN.pdf"}>Download CV</a>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
