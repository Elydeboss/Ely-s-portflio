import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS.",
    year: "2024",
    link: "https://jestsee.com",
    image: "/Savfi.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "EcoTracker",
    description:
      "A mobile-first application for tracking carbon footprint and eco-friendly habits.",
    year: "2023",
    link: "#",
    image: "",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "DevDash",
    description:
      "A developer dashboard for monitoring server health and deployment metrics.",
    year: "2023",
    link: "#",
    image: "/farmer-market.png",
    tags: ["Vue", "Node.js"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="text-neutral-400">
          A collection of projects I&apos;ve worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            href={project.link}
            target={project.link !== "#" ? "_blank" : undefined}
            className="group flex flex-col gap-4 p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 hover:bg-neutral-800/50 transition-all"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={20}
              height={10}
              className="bg-[#1A1C1B]"
            />
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
