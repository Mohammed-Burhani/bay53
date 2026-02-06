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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e2e8f0] shadow-sm">
      <div className="px-7 mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <Image src={"/logo.png"} alt="Bay53" width={500} height={500} className="w-26 h-18!" />
              
              <div className="text-[12px] text-[#64748b] leading-none">
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
                    ? "text-[#60a5fa] bg-[#60a5fa]/10 font-semibold hover:bg-[#60a5fa]/20"
                    : "text-[#475569] hover:text-[#60a5fa] hover:bg-[#60a5fa]/10 font-medium"
                }
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="shadow-lg hover:shadow-xl bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 border-0 font-semibold">
              <a href="/contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#475569]" />
            ) : (
              <Menu className="h-6 w-6 text-[#475569]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] shadow-lg py-4 px-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${isActive(link.href)
                  ? "text-[#60a5fa] bg-[#60a5fa]/10"
                  : "text-[#475569] hover:bg-[#f1f5f9] hover:text-[#60a5fa]"
                }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#e2e8f0]">
            <Button asChild variant="default" className="w-full bg-gradient-to-r from-[#60a5fa] to-[#10b981] border-0 font-semibold">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
