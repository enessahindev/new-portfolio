"use client";

// image
import Image from "next/image";

// framer
import { motion } from "framer-motion";

// variants

import { fadeIn } from "/variants";

export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image
              src={"icons/brands/react.svg"}
              width={85}
              height={32}
              alt="React"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/nextjs.svg"}
              width={60}
              height={60}
              alt="NextJs"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/tailwindcss.svg"}
              width={85}
              height={50}
              alt="Tailwindcss"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/vite.svg"}
              width={60}
              height={60}
              alt="Vite"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/html.svg"}
              width={60}
              height={60}
              alt="HTML"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/node.svg"}
              width={60}
              height={60}
              alt="Node"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/firebase.svg"}
              width={62}
              height={50}
              alt="Firebase"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
