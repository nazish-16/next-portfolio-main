import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-white text-black dark:bg-black dark:text-white">
      <div className="absolute inset-0 bg-white dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-gray-100 to-white dark:from-black dark:via-black dark:to-black">
          <div className="absolute inset-0 bg-white opacity-80 dark:bg-black dark:opacity-90" />
        </div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="#FF6B00"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#FF4D00"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#FF8533" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/5 dark:bg-black dark:bg-grid-white/5">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black/80 dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-black dark:text-white">
            BUILT WITH <span className="animate-pulse">🧡</span> BY <Link href={`https://www.linkedin.com/in/realnazish/`} target="_blank" className="underline underline-offset-1 text-orange-500">Nazish</Link> & <Link href={`https://www.linkedin.com/in/syed-usaid-minhaj-28033226a`} className="text-orange-500 underline underline-offset-1">USAID</Link>
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent dark:from-orange-500 dark:to-orange-300 md:text-5xl lg:text-6xl"
            words="Shaping Visions into Engaging User Interfaces"
          />

          <p className="mb-4 text-center text-sm text-orange-700/90 dark:text-orange-200/90 md:text-lg md:tracking-wider lg:text-lg">
            Hey, we are Nazish Usaid, a team of software developers based in India.
          </p>

          <Link href="#about" className="md:mt-10">
            <MagicButton
              title="Show our work"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
