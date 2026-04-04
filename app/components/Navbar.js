"use client";

import React from 'react';
import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-slate-200">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold">Chatzo</div>
        <nav className="hidden md:flex items-center gap-4 text-sm text-slate-700">
          <a href="#" className="hover:text-slate-900">Home</a>
          <a href="#" className="hover:text-slate-900">Features</a>
          <a href="#" className="hover:text-slate-900">About</a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <SignInButton>
          <button className="rounded-full px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="rounded-full px-4 py-2 bg-purple-600 text-white hover:bg-purple-700">
            Sign Up
          </button>
        </SignUpButton>
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
