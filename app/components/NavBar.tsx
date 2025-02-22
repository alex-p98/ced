"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon, Home, Users, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items?: NavItem[];
  className?: string;
}

const defaultItems: NavItem[] = [
  {
    name: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    name: "Les Coach",
    url: "/coach",
    icon: Users,
  },
  {
    name: "Nos Programmes",
    url: "/programmes",
    icon: BookOpen,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: Mail,
  },
];

export function NavBar({ items = defaultItems, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex flex-col items-start">
          <span className="text-sm font-light tracking-widest text-white">
            ÉCOLE DE HOCKEY
          </span>
          <span className="text-2xl font-bold text-white tracking-tight -mt-1">
            MOMENTUM
          </span>
        </Link>

        {/* Navigation - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-gray-400 hover:text-blue-500",
                    isActive && "bg-gray-800/50 text-blue-500"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-blue-500/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-t-full">
                        <div className="absolute w-12 h-6 bg-blue-500/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-blue-500/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-blue-500/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobile(!isMobile)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobile ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex flex-col space-y-1">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="px-6 py-3 text-gray-400 hover:text-blue-500 hover:bg-gray-800/50 transition-colors text-center"
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobile(false);
                  }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <item.icon size={18} />
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 