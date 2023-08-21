"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

// link / react scroll
import { Link } from "react-scroll";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-20 z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* Logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image
                src={"/icons/logo.png"}
                width={200}
                height={200}
                alt="Footer Logo"
              />
            </Link>
            <div className="text-secondary">
              Hello, I'm Enes Şahin! I am a passionate professional in web
              development and design. ennessahin.dev is a platform that reflects
              my creative journey in the digital world. I use a combination of
              coding and design to create modern and impressive web projects.
              Explore with me to step into digital experiences that bring
              together aesthetics, usability and functionality. Do not hesitate
              to contact me as you explore the power of the web!
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">
                  <a href="tel:+905538047294">+90 (553) 804 7294</a>
                </div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">
                  <a href="mailto:es@enessahin.dev">es@enessahin.dev</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div className="flex flex-col items-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <h3 className="h3 font-bold mb-8">All Links</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="https://github.com/enessahindev">Github</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/enessahin312">LinkedIn</a>
                </li>
                <li>
                  <a href="https://codepen.io/enessahindev">Codepen</a>
                </li>
                <li>
                  <a href="https://discord.gg/tQHUM3PM9z">Discord</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCrblCiU8Yc1PMQRchgVUDsQ">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div className="flex flex-col items-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
              <h3 className="h3 font-bold mb-8">Working Hours</h3>
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-2">
                  <div className="text-secondary">Mon-Tue:</div>
                  <div className="text-bold">10:00 - 18:00</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary">Wed-Thu:</div>
                  <div className="text-bold">10:00 - 18:00</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary">Fri:</div>
                  <div className="text-bold">10:00 - 18:00</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary">Sat-Sun:</div>
                  <div className="text-bold">Close</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
