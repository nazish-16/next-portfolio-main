import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow, FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { MagicButton } from "@/components/ui/magic-button";
import { socialMedia } from "@/data";

export const Footer = () => {
  // State for showing the back to top button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto bg-white text-black dark:bg-black dark:text-white">
        <div className="absolute -bottom-72 right-0 min-h-96 w-full">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            className="h-full w-full opacity-50"
            width={1260}
            height={863}
          />
        </div>

        <div className="flex flex-col items-center py-10">
          <Link
            href={`mailto:realnazishahmed@gmail.com`}
            target="_blank"
            rel="noreferrer noopener"
            className="md:mt-10"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>

        <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-orange-500"
            >
              Nazish Ahmed
            </Link>{" "}
            |{" "} All Rights reserved
          </p>

          <div className="flex items-center gap-6 md:gap-3 pt-20 md:pt-0">
            {socialMedia.map((profile) => (
              <Link
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noreferrer noopener"
                className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-orange-500 bg-black hover:bg-orange-700 transition-all bg-opacity-75 backdrop-blur-lg backdrop-filter dark:bg-black dark:hover:bg-orange-700 dark:border-orange-500"
                title={profile.name}
              >
                <Image
                  src={profile.img}
                  alt={`profile-${profile.name}`}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[10000] p-3 rounded-full shadow-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 dark:bg-orange-600 dark:hover:bg-orange-400 border border-orange-400 flex items-center justify-center text-xl
        ${showButton ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        aria-label="Back to Top"
        style={{ transitionProperty: 'opacity, transform', transitionDuration: '300ms' }}
      >
        <FaArrowUp />
      </button>
    </>
  );
};
