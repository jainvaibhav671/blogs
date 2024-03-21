import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Github, Twitter } from "lucide-react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-blur]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden sm:flex">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "flex gap-1 px-0",
                )}
              >
                <Github className="text-black dark:text-white" size={24} />
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn(buttonVariants({ variant: "ghost" }), "flex")}>
                <Twitter
                  className="text-blue-600 dark:text-blue-300"
                  size={24}
                />
              </div>
            </Link>
          </nav>
          <ToggleTheme />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
