import Image from "next/image"; 
import IntroList from "@data/intro.json";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, y: "5vh" });
    }
  }, [inView, animation]);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:-mx-8" ref={ref}>
        <motion.div className="w-full hidden lg:block lg:w-1/2 lg:px-8 mt-12 lg:mt-0" animate={animation}>
          <div
            className="relative md:flex"
            animate={animation}
          >
            <Image
              className="image z-10 -mt-44 bg-white p-5"
              src={IntroList[0].img}
              width={720}
              height={480}
              alt={IntroList[0].title}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
            />
          </div>
        </motion.div>
        <motion.div className="relative w-full lg:w-1/2 lg:px-8" animate={animation}>
          <p className="text-lg mt-4 font-display">{IntroList[0].lead}</p>
          <h2 className="text-4xl leading-tight font-bold mt-1">
            {IntroList[0].title}
          </h2>
          <Image
            className="grayscale absolute top-0 right-0 opacity-10"
            src={IntroList[0].bg}
            width={400}
            height={400}
            alt={IntroList[0].title}
          />

          {IntroList[0].text.map((item, index) => (
            <p className="mt-2 leading-relaxed" key={index}>
              {item}
            </p>
          ))}

          <ul className="my-5">
            {IntroList[0].list.map((item, index) => (
              <li className="my-10 text-xl" key={index}>
                <span className="py-2 px-4 bg-scred">{index + 1}</span>
                <span className="ml-3 my-5 text-xl">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}
