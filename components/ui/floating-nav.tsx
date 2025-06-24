"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
       if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-between space-x-3 rounded-2xl border px-5 py-3 shadow-md backdrop-blur-sm",
          "bg-white/80 border-orange-500/30 text-orange-600 dark:bg-black/80 dark:border-orange-500/60 dark:text-orange-400",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center mr-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" className="fill-orange-100 dark:fill-zinc-900" />
            <path d="M7 15L15 7M7 7h8v8" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ml-1 text-base font-bold text-orange-600 dark:text-orange-400">NU</span>
        </Link>

        {/* Nav Items */}
        <div className="flex items-center space-x-2">
          {navItems.filter((item) => item.name.toLowerCase() !== "contact").map((navItem: any, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center transition-colors duration-200 text-sm font-medium px-1 py-0.5 rounded focus:outline-none focus:ring-0",
                "text-orange-600 hover:text-orange-500 dark:text-white dark:hover:text-orange-400"
              )}
            >
              <span className="!cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
        {/* Theme Toggle Button */}
        <ThemeToggleButton />
      </motion.nav>
    </AnimatePresence>
  );
};
// Theme toggle button component
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-2 rounded-full border px-2 py-1 text-xs font-bold shadow-sm transition-all focus:outline-none focus:ring-0 border-orange-300 bg-orange-100 text-orange-600 hover:bg-orange-200 hover:text-black dark:border-orange-500 dark:bg-black dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

