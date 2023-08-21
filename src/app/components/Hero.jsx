"use client";

// image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// icons
import { FaGithub, FaLinkedin, FaCodepen, FaYoutube } from "react-icons/fa";

// variants
import { fadeIn } from "/variants";

export default function Hero() {
  return (
    <section className="h-screen xl:h-[90vh]" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h2 text"
            >
              <span className="text-blue-600">Explore Aesthetics </span> and
              Functionality in Web Design.
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              <span className="text-primary text-1xl font-bold">
                Muhammet Enes Şahin
              </span>
              <br /> Freelance Web Developer, React Developer and UI/UX Designer
            </motion.p>
            {/* buttons */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* buttons socials */}
              <button className="btn-cta">
                <a href="https://github.com/enessahindev">
                  <FaGithub />
                </a>
              </button>
              <button className="btn-cta">
                <a href="https://linkedin.com/in/enessahin312">
                  <FaLinkedin />
                </a>
              </button>
              <button className="btn-cta">
                <a href="https://codepen.io/enessahindev">
                  <FaCodepen />
                </a>
              </button>
              <button className="btn-cta">
                <a href="https://www.youtube.com/channel/UCrblCiU8Yc1PMQRchgVUDsQ">
                  <FaYoutube />
                </a>
              </button>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:top-48 xl:right-[100px] min-[1680px]:right-[120px]"
          >
            <Image
              src={"/images/hero/logo.png"}
              fill
              alt="HeroLogo"
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
