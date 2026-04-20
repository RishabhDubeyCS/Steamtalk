"use client";

import React from 'react';
import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth
} from "@clerk/nextjs";
import { MessageSquareQuote, Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left Section: Logo & Desktop Nav */}
          <div className="flex items-center gap-8 flex-1">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90 shrink-0">
              <MessageSquareQuote className="h-6 w-6 text-purple-600" />
              <span className="text-lg sm:text-xl font-bold tracking-tight">StreamTalk</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/">Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/forums">Forums</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/chat">UserChat</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Right Section: Auth & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {/* Auth Buttons/User Button */}
            {(!isLoaded || !mounted) ? (
              <div className="h-9 w-20 animate-pulse rounded-md bg-muted" />
            ) : (
              <>
                {!isSignedIn && (
                  <>
                    <SignInButton mode="modal">
                      <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}

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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t">
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/forums"
                className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={closeMenu}
              >
                Forums
              </Link>
              <Link
                href="/chat"
                className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={closeMenu}
              >
                UserChat
              </Link>

              {/* Mobile Auth Buttons */}
              {!isSignedIn && mounted && isLoaded && (
                <div className="flex gap-2 pt-2 border-t">
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm" className="flex-1">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;