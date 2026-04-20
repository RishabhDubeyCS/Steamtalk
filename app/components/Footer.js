"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">StreamTalk</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              A real-time discussion platform to connect, share ideas, and
              collaborate instantly with developers worldwide.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <Link href="https://github.com/RishabhDubeyCS" target="_blank">
                <Github className="w-5 h-5 hover:text-white transition" />
              </Link>
              <Link href="https://www.linkedin.com/in/rishabh-dubey-362500298/" target="_blank">
                <Linkedin className="w-5 h-5 hover:text-white transition" />
              </Link>
              <Link href="#">
                <Twitter className="w-5 h-5 hover:text-white transition" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/forums">Discussion Forums</Link></li>
              <li><Link href="#">Real-Time Chat</Link></li>
              <li><Link href="#">Secure Authentication</Link></li>
              <li><Link href="#">Modern UI</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">API Reference</Link></li>
              <li>
                <Link href="https://github.com/RishabhDubeyCS" target="_blank">
                  GitHub Repo
                </Link>
              </li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get updates on new features and releases.
            </p>

            <div className="flex gap-2">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          
          <p>
            © {new Date().getFullYear()} StreamTalk. All rights reserved.
          </p>

          <p className="text-center">
            Crafted with  by{" "}
            <Link
              href="https://www.linkedin.com/in/rishabh-dubey-362500298/"
              target="_blank"
              className="font-medium hover:text-white transition"
            >
              Rishabh Dubey
            </Link>
          </p>

          <div className="flex gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}