import { 
  MapPin, 
  Music, 
  Twitter, 
  Github, 
  ArrowUpRight, 
  Mail, 
  Linkedin,
  Bookmark,
  Box,
  Figma,
  ArrowRight,
  Layers,
  Database,
  Code as CodeIcon,
  Flame,
  Zap
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
       
       {/* 1. Map Card - 1x2 (Big Square-ish) */}
       <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-colors h-[380px] flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Abstract Map Background Placeholder */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          
          <div className="relative z-10 flex justify-between items-start">
             <div className="bg-neutral-800/80 backdrop-blur-sm p-2 rounded-full border border-white/10">
                 <MapPin className="w-4 h-4 text-white" />
             </div>
          </div>
          
          <div className="relative z-10">
             <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
             <h3 className="text-xl font-bold text-white">Jakarta</h3>
             <p className="text-neutral-400 text-sm mt-1">
                 {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Jakarta' })} WIB
             </p>
          </div>
       </div>

       {/* 2. Bookmarked Card - 1x2 (Big Square-ish) */}
       <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-colors h-[380px] flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-2 mb-8">
             <div className="bg-neutral-800/80 p-2 rounded-full border border-white/10">
               <Bookmark className="w-4 h-4 text-white" />
             </div>
             <span className="text-sm font-medium text-neutral-300">Featured work</span>
          </div>

          <div className="flex-1 flex flex-col justify-center relative z-10">
             <h3 className="text-xl font-bold text-white mb-2">Bookmarked</h3>
             <p className="text-sm text-neutral-400 leading-relaxed">
               Effortlessly save and organize your favorite tweets in Notion using a Telegram bot.
             </p>
             
             {/* Abstract UI representation */}
             <div className="mt-6 bg-neutral-800/50 rounded-xl p-3 border border-white/5 transform group-hover:scale-105 transition-transform duration-300">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded bg-neutral-700 flex items-center justify-center">
                   <Bookmark className="w-4 h-4 text-white" />
                 </div>
                 <div className="flex-1">
                   <div className="h-2 w-20 bg-neutral-600 rounded mb-1" />
                   <div className="h-1.5 w-12 bg-neutral-700 rounded" />
                 </div>
                 <div className="text-[10px] text-neutral-500">Just now</div>
               </div>
               <div className="h-1.5 w-full bg-neutral-700/50 rounded mb-1" />
               <div className="h-1.5 w-2/3 bg-neutral-700/50 rounded" />
             </div>
          </div>
       </div>

      {/* Right Column Stack */}
      <div className="col-span-1 md:col-span-2 md:row-span-2 flex flex-col gap-4 h-[380px]">
         
         {/* 3. Spotify Card - 2x1 (Wide, Short) */}
         <div className="flex-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-all">
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center justify-between h-full relative z-10">
               <div className="flex items-center gap-4">
                  <div className="relative">
                     <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                       <Music className="w-5 h-5 text-green-500" />
                     </div>
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-0.5">Last played</p>
                    <p className="font-semibold text-white">Freal Luv</p>
                    <p className="text-xs text-neutral-400">Far East Movement</p>
                  </div>
               </div>
               <Music className="w-4 h-4 text-neutral-600" />
            </div>
         </div>

         {/* 4. Typing Speed - 2x1 (Wide, Short) */}
         <div className="flex-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-all">
             <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             
             <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-white/5">
                  <Zap className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-neutral-300">Typing speed</span>
                </div>
             </div>

             <div className="flex items-end gap-2 mt-2">
                <h3 className="text-4xl font-bold text-white tracking-tighter">142</h3>
                <span className="text-sm text-neutral-500 font-medium mb-1.5">wpm</span>
             </div>
             
             <div className="flex items-center gap-4 mt-4 text-xs text-neutral-500 font-mono">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-neutral-600" /> 15s</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> 100%</span>
                <span className="flex items-center gap-1">EN</span>
             </div>
         </div>

      </div>

      {/* Row 2: Socials & Discover */}
      
      {/* 5. Social Cluster - 2x1 (3 separate buttons) */}
      <div className="col-span-1 md:col-span-2 h-[100px] grid grid-cols-3 gap-4">
          <Link href="https://x.com" target="_blank" className="rounded-3xl bg-neutral-900/50 border border-white/5 flex items-center justify-center group hover:border-white/10 hover:bg-white/5 transition-all">
             <Twitter className="w-6 h-6 text-white" />
          </Link>
          <Link href="https://figma.com" target="_blank" className="rounded-3xl bg-neutral-900/50 border border-white/5 flex items-center justify-center group hover:border-white/10 hover:bg-white/5 transition-all">
             <Figma className="w-6 h-6 text-white" />
          </Link>
          <div className="rounded-3xl bg-neutral-900/50 border border-white/5 flex items-center justify-center group hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer">
             <Box className="w-6 h-6 text-white" />
          </div>
      </div>

      {/* 6. Discover More - 2x1 */}
      <Link href="/projects" className="col-span-1 md:col-span-2 h-[100px] rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex items-center justify-between group hover:border-white/10 hover:bg-neutral-800/50 transition-all">
          <span className="text-base font-medium text-white">Discover more projects</span>
          <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
             <ArrowRight className="w-4 h-4" />
          </div>
      </Link>

      {/* Row 3: Github & Tech Stack */}

      {/* 7. Github Activity - 2x1 (Wide) */}
      <div className="col-span-1 md:col-span-2 h-[240px] rounded-3xl bg-neutral-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-all">
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-white/5">
                <Github className="w-3 h-3 text-white" />
                <span className="text-xs text-neutral-300">Github activity</span>
             </div>
             <span className="text-xs text-neutral-500">1,510 contributions</span>
          </div>
          
          {/* Fake Graph Visual */}
          <div className="grid grid-cols-12 gap-1 opacity-50 mask-gradient" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)' }}>
             {Array.from({ length: 84 }).map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full pt-[100%] rounded-sm",
                    Math.random() > 0.7 ? "bg-green-500/80" : 
                    Math.random() > 0.4 ? "bg-green-500/40" : "bg-neutral-800"
                  )} 
                />
             ))}
          </div>

          <div className="absolute bottom-6 left-6 right-6">
             <p className="text-xs text-neutral-500">Last pushed on {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
      </div>

       {/* 8. Tech Stack - 2x1 (Wide) */}
       <div className="col-span-1 md:col-span-2 h-[240px] rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex flex-col relative overflow-hidden group hover:border-white/10 transition-all">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-white/5">
                <Layers className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-neutral-300">Tech stack</span>
             </div>
          </div>

          <div className="flex justify-between items-center mb-auto px-4">
             {/* Tech Icons (Simulated) */}
             <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5">
                <CodeIcon className="w-5 h-5 text-cyan-400" />
             </div>
             <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5">
                <Database className="w-5 h-5 text-emerald-400" />
             </div>
             <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5">
                <Zap className="w-5 h-5 text-yellow-400" />
             </div>
             <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5">
                <Flame className="w-5 h-5 text-orange-400" />
             </div>
          </div>

          <div>
             <h3 className="text-white font-medium mb-1">Tech stacks I&apos;m familiar with</h3>
             <p className="text-xs text-neutral-500 leading-relaxed">
               Primarily focused on the JavaScript ecosystem, but always eager to explore and learn new technologies.
             </p>
          </div>
       </div>

    </div>
  )
}
