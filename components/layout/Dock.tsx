"use client";

import { useRef } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, FolderGit2, Pencil, User, Mail, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex h-16 gap-6 items-end rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 px-4 pb-3 z-50">
      <AppIcon mouseX={mouseX} href="/" icon={<Home className="size-full text-neutral-300" />} label="Home" />
      <AppIcon mouseX={mouseX} href="/projects" icon={<FolderGit2 className="size-full text-neutral-300" />} label="Projects" />
      <AppIcon mouseX={mouseX} href="/blog" icon={<Pencil className="size-full text-neutral-300" />} label="Blog" />
      {/* <div className="w-px h-10 bg-white/10 mx-1 mb-1 self-center" /> */}
      <AppIcon mouseX={mouseX} href="https://x.com" external icon={<Twitter className="size-full text-neutral-300" />} label="X" />
      <AppIcon mouseX={mouseX} href="https://github.com" external icon={<Github className="size-full text-neutral-300" />} label="GitHub" />
    </div>
  );
}

function AppIcon({ mouseX, icon, href, label, external }: { mouseX: MotionValue; icon: React.ReactNode; href: string; label: string; external?: boolean }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="group relative">
        <Link href={href} target={external ? "_blank" : undefined} className="block">
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square w-10 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center hover:bg-neutral-700 transition-colors"
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
            >
                <div className="w-5 h-5 flex items-center justify-center pointer-events-none">
                    {icon}
                </div>
            </motion.div>
        </Link>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-neutral-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none whitespace-nowrap">
            {label}
        </div>
    </div>
  );
}
