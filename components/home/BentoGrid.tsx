import { MapPin, Music, Twitter, Github, ArrowUpRight, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
       {/* Map Card - Large 2x2 */}
       <div className="col-span-2 row-span-2 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Abstract Map Background Placeholder */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="bg-neutral-800/80 backdrop-blur-sm p-2 rounded-full border border-white/10">
                    <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Online
                </div>
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white">Jakarta, ID</h3>
                <p className="text-neutral-400 text-sm mt-1">
                    {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Jakarta' })} WIB
                </p>
             </div>
          </div>
       </div>

       {/* Spotify Card - 1x1 */}
       <div className="col-span-1 row-span-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Music className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-xs text-neutral-500">Offline</p>
            <p className="font-semibold text-white">Spotify</p>
          </div>
       </div>

       {/* Github Card - 1x1 */}
       <Link href="https://github.com" target="_blank" className="col-span-1 row-span-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex flex-col justify-between group hover:border-white/10 hover:bg-neutral-800/50 transition-all">
          <div className="flex justify-between items-start">
             <Github className="w-8 h-8 text-white" />
             <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </div>
          <p className="font-semibold text-white">Github</p>
       </Link>

       {/* Twitter Card - 1x1 */}
       <Link href="https://x.com" target="_blank" className="col-span-1 row-span-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex flex-col justify-between group hover:border-white/10 hover:bg-blue-500/5 transition-all">
          <div className="flex justify-between items-start">
             <Twitter className="w-8 h-8 text-blue-400" />
             <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </div>
          <p className="font-semibold text-white">Twitter / X</p>
       </Link>

       {/* LinkedIn/Email Card or Stats - 1x1 */}
        <Link href="mailto:hello@example.com" className="col-span-1 row-span-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex flex-col justify-between group hover:border-white/10 hover:bg-neutral-800/50 transition-all">
          <div className="flex justify-between items-start">
             <Mail className="w-8 h-8 text-purple-400" />
             <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </div>
          <p className="font-semibold text-white">Email</p>
       </Link>
       
       {/* Wide Stats Card - 2x1 */}
       <div className="col-span-2 row-span-1 rounded-3xl bg-neutral-900/50 border border-white/5 p-6 flex flex-col justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-neutral-800/20 opacity-0 group-hover:opacity-100 transition-opacity" />
           <p className="text-neutral-400 text-sm">Typing Speed</p>
           <h3 className="text-3xl font-bold text-white mt-1">115 <span className="text-lg text-neutral-500 font-normal">WPM</span></h3>
           <div className="w-full bg-neutral-800 h-1.5 mt-4 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[85%] rounded-full" />
           </div>
       </div>

    </div>
  )
}
