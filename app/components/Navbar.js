"use client";

import React from 'react';
import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth
} from "@clerk/nextjs";
import { MessageSquareQuote } from "lucide-react"; // Nice icon for "Chatzo"

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <MessageSquareQuote className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold tracking-tight">StreamTalk</span>
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/forums">
                      Forums
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/chat">
                      UserChat
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Right Section: Auth */}
        <div className="flex items-center gap-3 min-w-[150px] justify-end">
          {/* Prevent hydration mismatches by not rendering auth buttons on server */}
          {(!isLoaded || !mounted) ? (
            <div className="h-9 w-20 animate-pulse rounded-md bg-muted" />
          ) : (
            <>
              {/* Shown only when user is logged out */}
              {!isSignedIn && (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost">Sign In</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
                  </SignUpButton>
                </>
              )}

              {/* Shown only when user is logged in */}
              {isSignedIn && (
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9"
                    }
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;