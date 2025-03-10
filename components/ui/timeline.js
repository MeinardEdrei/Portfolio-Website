"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from "next/link";

export const Timeline = ({
  data,
  setSelectedImage,
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const viewImage = (image) => {
    setSelectedImage(image);
  }

  return (
    (<div
      className="w-full bg-[var(--secondary-background)] dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          -- 💻 My Developer Journey
        </h2>
        <p
          className="pl-10 text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Each line of code represents progress. This section showcases my journey—from the fundamentals to mastering full-stack development and to many more.
        </p>
        <p className="mt-2 pl-10 text-sm">
          <Link href='https://github.com/MeinardEdrei' className='italic hover:underline font-light'> https://github.com/MeinardEdrei</Link>
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[var(--background)] dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div className="flex flex-col gap-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                {item.content?.caption?.map((text, index) => (
                  <div key={index}>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: text }}></p>
                  </div>
                ))}
              </div>
              <div className={item?.content?.image?.length > 1 ? `grid md:grid-cols-2 gap-2` : `m-5 gap-2`}>
                {item.content?.image?.map((image, index) => (
                  <div key={index} onClick={() => viewImage(image)} className="cursor-pointer">
                    < Image
                      src={image}
                      width={500}
                      height={500}
                      className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full cursor-zoom-in shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      alt='Experience Photo'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div >)
  );
};

