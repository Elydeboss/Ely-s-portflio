// components/IsometricButton.tsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const IsometricButton = ({ children, className = "" }: Props) => (
  <button
    className={`
    relative bg-[#1a1a1e] border border-white/10 p-4 rounded-xl
    text-white transition-all duration-200
    shadow-[6px_6px_0px_0px_rgba(45,45,50,1)]
    hover:translate-x-[2px] hover:translate-y-[2px] 
    hover:shadow-[2px_2px_0px_0px_rgba(45,45,50,1)]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    ${className}
  `}
  >
    {children}
  </button>
);

export function Hero() {
  return (
    <div className="flex flex-col gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
      <div className="bg-transparent w-fit text-green-400 px-3 py-3 rounded-full text-xs font-medium border border-green-500/20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Avaliable for projects
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Hi, I&apos;m Elijah
      </h1>
      <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed">
        I am a Frontend web2 and web3 developer based in Nigeria. I build
        beautiful and functional websites. Passionate about user experience and
        design systems.
      </p>
      {/* The container for the buttons */}
      <div className="mt-12 flex flex-row gap-6 items-center">
        <IsometricButton>
          <Github size={24} />
        </IsometricButton>

        <IsometricButton>
          <Linkedin size={24} />
        </IsometricButton>

        <IsometricButton>
          <Mail size={24} />
        </IsometricButton>

        {/* The "Explore More" button often has a different shape in this design */}
        <button className="bg-[#1a1a1e] border border-white/10 px-8 py-4 rounded-xl text-xs font-black italic tracking-widest uppercase shadow-[6px_6px_0px_0px_rgba(45,45,50,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(45,45,50,1)]">
          Explore More
        </button>
      </div>
    </div>
  );
}
