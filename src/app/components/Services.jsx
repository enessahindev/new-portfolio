"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

// icon services
import { FaCode, FaCodeBranch, FaYoutube, FaChild } from "react-icons/fa";

const features = [
  {
    name: "Write to Clean code",
    description:
      "I can code your website as 100% mobile compatible within the framework of clean code.",
    icon: FaCode,
  },
  {
    name: "Education for Young",
    description:
      "We provide consultation and training to help you succeed in the digital realm. Offering insights into web design, development trends, and digital strategies to empower you with knowledge.",
    icon: FaYoutube,
  },
  {
    name: "Javascript (ReactJS,NextJS) Development",
    description:
      "I can provide desktop software support for you with ReactJS, NextJS Technology. I can work in harmony with your experienced staff on the support and software side of your project.",
    icon: FaCodeBranch,
  },
  {
    name: "Education for Children",
    description:
      "I can teach your children in primary and high school age remotely or individually with basic software training and applications.",
    icon: FaChild,
  },
];

export default function Services() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                SERVICES
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My Services
              </p>
              <motion.p
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                As a freelancer, I can provide software assistance to you when
                the relevant sections are missing in your projects. As a team
                player I can help you finish your project with your team.
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <br />
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
