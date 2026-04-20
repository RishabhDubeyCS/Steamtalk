

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 text-center">
        
        {/* Heading */}
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          StreamTalk <br /> Real-Time Discussions
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-neutral-300">
          A full-stack real-time discussion platform built with Next.js, Stream.io, 
          and Clerk. Experience lightning-fast messaging, secure authentication, 
          and dynamic topic-based chat rooms — all in one modern application.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/chat">
            <Button className="bg-white text-black hover:bg-neutral-200">
              Get Started
            </Button>
          </Link>
          <a href="https://github.com/RishabhDubeyCS/Steamtalk" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              View GitHub
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}