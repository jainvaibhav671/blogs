"use client";

import Link from "next/link";
import React from "react";
import { Gamepad } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Gamepad className="text-black dark:text-white" />
        <span className="text-foreground font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60",
          "hidden sm:inline-block",
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "text-foreground" : "text-foreground/60",
          "hidden sm:inline-block",
        )}
      >
        About
      </Link>
    </nav>
  );
}
