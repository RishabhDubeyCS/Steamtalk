"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topics = [
  {
    text: "Python",
    slug: "python",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    desc: "Python is a versatile programming language used in web, AI, and automation."
  },
  {
    text: "JavaScript",
    slug: "javascript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    desc: "JavaScript powers modern web apps with dynamic and interactive features."
  },
  {
    text: "React",
    slug: "react",
    img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    desc: "React helps build fast, reusable UI components for modern applications."
  },
  {
    text: "Next.js",
    slug: "nextjs",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    desc: "Next.js is a full-stack React framework with SSR and API routes."
  },
  {
    text: "Node.js",
    slug: "nodejs",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    desc: "Node.js enables server-side JavaScript for scalable backend systems."
  },
  {
    text: "MongoDB",
    slug: "mongodb",
    img: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    desc: "MongoDB is a flexible NoSQL database for scalable applications."
  }
];

const Forums = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
         Discussion Forums
      </h1>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {topics.map((topic) => (
          <Card
            key={topic.slug}
            className="hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              
              {/* Icon */}
              <Image
                src={topic.img}
                alt={topic.text}
                width={40}
                height={40}
              />

              <CardTitle>{topic.text}</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription className="mb-4">
                {topic.desc}
              </CardDescription>

              {/* Button */}
              <Link href={`/forum/${topic.slug}`}>
                <Button className="w-full">
                  Join Discussion
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
};

export default Forums;