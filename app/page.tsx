import { Hero } from "@/components/home/Hero";
import { BentoGrid } from "@/components/home/BentoGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BentoGrid />
    </div>
  );
}
