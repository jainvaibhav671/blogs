import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Github, Twitter } from "lucide-react";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-blur]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "flex gap-1",
                )}
              >
                <Github color="black" size={24} />
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn(buttonVariants({ variant: "ghost" }), "flex")}>
                <Twitter color="blue" size={24} />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
