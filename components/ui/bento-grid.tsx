"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { useTheme } from "next-themes";
import { techStack } from "@/data";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";

const BackgroundGradientAnimation = dynamic(
  () => import("./background-gradient-animation").then(mod => mod.BackgroundGradientAnimation),
  { ssr: false }
);

import { MagicButton } from "./magic-button";
import { ProgressGraph } from "./progress-graph";
import { MemoryGame } from "./memory-game";

import { GridGlobe } from "../grid-globe";

// Toast component
const Toast = ({ show, message }: { show: boolean; message: string }) => (
  <div
    className={`fixed bottom-8 left-1/2 z-[9999] -translate-x-1/2 transition-all duration-300 ${
      show ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className="bg-black border border-orange-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-base">
      {message}
    </div>
  </div>
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5 bg-white text-black dark:bg-black dark:text-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { theme } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText('realnazishahmed@gmail.com');
    setCopied(true);
    setShowToast(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  useEffect(() => {
    if (!showToast) return;
    const toastTimeout = setTimeout(() => setShowToast(false), 1800);
    return () => clearTimeout(toastTimeout);
  }, [showToast]);

  return (
    <>
      <Toast show={showToast} message="Email copied" />
      <div
        className={cn(
          "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 shadow-input transition duration-200 hover:shadow-xl dark:shadow-none bg-white text-black dark:bg-black dark:text-white",
          className
        )}
      >
        <div className={cn("h-full", id === 6 && "flex justify-center")}>
          <div className="absolute h-full w-full">
            {img && (
              <Image
                width={689}
                height={541}
                src={img}
                alt={img}
                className={cn("object-cover object-center", imgClassName)}
              />
            )}
          </div>

          <div
            className={cn(
              "absolute right-0 -mb-5",
              id === 5 && "w-full opacity-80"
            )}
          >
            {spareImg && (
              <Image
                width={208}
                height={96}
                src={spareImg}
                alt={spareImg}
                className="h-full w-full object-cover object-center"
              />
            )}
          </div>

          {id === 6 && (
            theme === "light" || theme === "system" ? (
              <BackgroundGradientAnimation
                gradientBackgroundStart="rgb(255, 247, 237)"
                gradientBackgroundEnd="rgb(255, 236, 209)"
                firstColor="255, 200, 100"
                secondColor="255, 220, 150"
                thirdColor="255, 255, 255"
                fourthColor="255, 180, 80"
                fifthColor="255, 220, 150"
                pointerColor="255, 200, 100"
                blendingValue="lighten"
              />
            ) : (
              <BackgroundGradientAnimation
                gradientBackgroundStart="rgb(0, 0, 0)"
                gradientBackgroundEnd="rgb(10, 10, 10)"
                firstColor="255, 107, 0"
                secondColor="255, 107, 0"
                thirdColor="255, 179, 128"
                fourthColor="236, 140, 0"
                fifthColor="255, 107, 0"
                pointerColor="255, 107, 0"
                blendingValue="soft-light"
              />
            )
          )}

          <div
            className={cn(
              "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
              titleClassName
            )}
          >
            <div className="z-10 font-sans text-sm font-extralight text-gray-700 dark:text-orange-100 md:text-xs lg:text-base">
              {description}
            </div>

            <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
              {title}
            </div>

            {id === 2 && <GridGlobe />}

            {id === 3 && (
              <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
                <div className="flex flex-col gap-3 lg:gap-8">
                  {techStack.stack1.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-gray-100 dark:bg-black/80 border-orange-500/40 border px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100 text-black dark:text-white"
                    >
                      {item}
                    </span>
                  ))}

                  <span className="rounded-lg bg-gray-100 dark:bg-black/80 px-3 py-4 text-center" />
                </div>

                <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="rounded-lg bg-gray-100 dark:bg-black/80 px-3 py-4 text-center" />
                  {techStack.stack2.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-gray-100 dark:bg-black/80 border-orange-500/40 border px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100 text-black dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="group relative mt-5">
                <button
                  tabIndex={-1}
                  className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
                >
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </button>
                <MagicButton
                  title={copied ? "Email copied!" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  otherClasses="!bg-black text-orange-200"
                  handleClick={handleCopy}
                  asChild
                />
              </div>
            )}

            {id === 7 && (
              <div className="mt-4 h-full w-full">
                <ProgressGraph />
              </div>
            )}

            {id === 8 && (
              <div className="mt-4 h-full w-full">
                <MemoryGame />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
