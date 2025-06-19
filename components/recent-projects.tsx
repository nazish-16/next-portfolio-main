import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

// Simple modal component
const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm px-2"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl border border-black/10 dark:border-white/10 bg-white text-black dark:bg-black dark:text-white shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-orange-400 hover:bg-orange-500/80 hover:text-white transition shadow-lg border border-orange-500/30"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center bg-white dark:bg-black p-6 lg:p-8 hidden lg:flex">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-orange-500/20 shadow-lg bg-black">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover object-center w-full h-full"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex-col justify-center p-6 lg:p-8 gap-3 lg:gap-5 text-center lg:text-left hidden lg:flex">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-orange-400 mb-1 drop-shadow-lg">{project.title}</h2>
          <p className="text-base text-orange-200 mb-1 font-semibold">{project.des}</p>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">{project.about}</p>
          <div className="mb-2">
            <span className="font-semibold text-orange-300">Tech Stack / Features:</span>
            <ul className="list-disc list-inside mt-2 flex flex-wrap gap-x-4 gap-y-1 justify-center lg:justify-start">
              {project.techStack?.map((tech: string) => (
                <li key={tech} className="text-xs text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-lg font-semibold inline-block">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-center items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-full shadow-lgtransition mx-auto lg:mx-0 hover:from-orange-600 hover:to-orange-500 transition-colors"
          >
            Visit Project <FaLocationArrow />
          </a>
        </div>
        <div className="w-full flex flex-col justify-center p-6 gap-3 text-center lg:hidden bg-white dark:bg-black">
          <h2 className="text-xl font-extrabold text-orange-400 mb-1 drop-shadow-lg">{project.title}</h2>
          <p className="text-base text-orange-200 mb-1 font-semibold">{project.des}</p>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed max-w-xl mx-auto">{project.about}</p>
          <div className="mb-2">
            <span className="font-semibold text-orange-300">Tech Stack / Features:</span>
            <ul className="list-disc list-inside mt-2 flex flex-wrap gap-x-4 gap-y-1 justify-center">
              {project.techStack?.map((tech: string) => (
                <li key={tech} className="text-xs text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-lg font-semibold inline-block">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-center items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-full shadow-lgtransition mx-auto hover:from-orange-600 hover:to-orange-500 transition-colors"
          >
            Visit Project <FaLocationArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des, iconLists, img, link, title, about, techStack }, idx) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] cursor-pointer bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-lg rounded-2xl text-black dark:text-white"
              onClick={() => setSelectedProject(projects[idx])}
            >
              <PinContainer title="Click" href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl shadow-lg">
                  <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-white dark:bg-black">
                  </div>
                  <Image
                    height={800}
                    width={800}
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10 rounded-xl"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold lg:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-lg mt-2 lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center bg-[#ff6a01] rounded-full p-1 h-7 w-7">
                    <FaLocationArrow color="#ffffff" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
