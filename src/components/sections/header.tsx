"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Modules", href: "/modules" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-7 mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <Image src={"/logo.png"} alt="Bay53" width={500} height={500} className="w-16 h-10!" />
              
              <div className="text-[12px] text-gray-500 leading-none">
                by Burhani Technologies
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant="ghost"
                className={
                  isActive(link.href)
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium"
                }
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="shadow-md hover:shadow-lg">
              <a href="/contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${isActive(link.href)
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Button asChild variant="default" className="w-full">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
