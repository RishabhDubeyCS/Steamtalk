import Image from "next/image";
import { Inter } from "next/font/google";
import SpotlightPreview from "@/components/spotlight-demo";
import HoverBorderGradientDemo from "@/components/hover-border-gradient-demo";
import CanvasTextDemo from "@/components/canvas-text-demo";
import TracingBeamDemo from "@/components/tracing-beam-demo";
import GlowingEffectDemoSecond from "@/components/glowing-effect-demo-2";
import GlobeDemo from "@/components/globe-demo";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden w-full bg-background">
      {/* Hero Section */}
      <div className="w-full mb-10 md:mb-24">
        <SpotlightPreview />
      </div>
      
      {/* Container for main content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-24 md:gap-40 pb-32">
        
        {/* Canvas text with background lines effect */}
        <section className="relative w-full rounded-2xl overflow-hidden border border-border/50">
          <BackgroundLines className="flex items-center justify-center w-full flex-col p-4 md:p-10">
            <div className="z-20 w-full">
              <CanvasTextDemo />
            </div>
          </BackgroundLines>
        </section>

        {/* Features section */}
        <section className="w-full">
          <GlowingEffectDemoSecond />
        </section>
        
        {/* Global reach section */}
        <section className="w-full">
          <GlobeDemo />
        </section>
<CanvasTextDemo/>
      </div>
    </main>
  );
}
