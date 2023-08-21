"use client";

import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const portfolio = [
  {
    id: 1,
    name: "SATASOFTWARE.COM",
    href: "https://satasoftware.com/",
    imageSrc: "/images/portfolio/sata.png",
    imageAlt:
      "UI/UX Design, Web Development ASP.NET Entity Front-End & Back End",
  },
  {
    id: 2,
    name: "UKCTM.CO.UK",
    href: "https://ukctm.co.uk/",
    imageSrc: "/images/portfolio/ukctm.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT REACTJS FRONT-END & BACK END",
  },
  {
    id: 3,
    name: "Develand Social Media",
    href: "https://social.enessahin.dev/",
    imageSrc: "/images/portfolio/social-media-app.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT FRONT-END & BACK-END",
  },
  {
    id: 4,
    name: "Rent A Car Web Project with React",
    href: "https://rent-a-car-dusky.vercel.app/",
    imageSrc: "/images/portfolio/budemicar.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT FRONT-END",
  },
  {
    id: 5,
    name: "OIP Marketing Project with React",
    href: "https://oipmarketing.netlify.app/",
    imageSrc: "/images/portfolio/oipv1.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT FRONT-END",
  },
  {
    id: 6,
    name: "PetWash Project with React",
    href: "https://petwash.netlify.app/",
    imageSrc: "/images/portfolio/petwash.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT FRONT-END & BACK-END",
  },
  {
    id: 7,
    name: "Real Estate Project with React",
    href: "https://react-nextjs-real-estate-project.vercel.app/",
    imageSrc: "/images/portfolio/real-estate-project.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT FRONT-END & BACK-END",
  },
  {
    id: 8,
    name: "Beachaway Project with React",
    href: "https://beachaways-react-exercise.vercel.app/",
    imageSrc: "/images/portfolio/beachaway-project.png",
    imageAlt: "UI/UX DESIGN, WEB DEVELOPMENT FRONT-END",
  },
];

export default function Portfolio() {
  return (
    <section
      className="overflow-hidden bg-white py-24 sm:py-32 "
      id="portfolio"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          PORTFOLIO
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Portfolio
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {portfolio.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <motion.h1
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="text-md text-primary"
                  >
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </motion.h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
