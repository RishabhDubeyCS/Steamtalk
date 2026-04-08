"use client";
import React from "react";
import Image from "next/image";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("font-sans text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
const dummyContent = [
  {
    title: "Full-Stack Real-Time Platform",
    badge: "Overview",
    description: (
      <>
        <p>
          StreamTalk is a full-stack real-time discussion platform built using
          Next.js, Tailwind CSS, Stream.io, and Clerk.
        </p>
        <p>
          It enables instant communication through scalable chat rooms with a
          modern UI.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475", // coding + system
  },
  {
    title: "Real-Time Messaging Experience",
    badge: "Real-Time",
    description: (
      <>
        <p>
          Powered by Stream.io, messages are delivered instantly with live
          updates and threaded conversations.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432", // chat / messaging UI
  },
  {
    title: "Secure Authentication System",
    badge: "Security",
    description: (
      <>
        <p>
          Clerk handles secure authentication with login, signup, and session
          management.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3", // security lock
  },
  {
    title: "Dynamic Routing & Chat Rooms",
    badge: "Scalability",
    description: (
      <>
        <p>
          Dynamic routing creates topic-based chat rooms like /forum/react and
          /forum/javascript.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31", // network / connections
  },
  {
    title: "Modern UI & Developer Experience",
    badge: "UI/UX",
    description: (
      <>
        <p>
          Built with Tailwind CSS and shadcn/ui for a clean, responsive and
          modern design system.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d", // UI design workspace
  },
];
