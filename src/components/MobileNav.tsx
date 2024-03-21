"use client";

import React, { useState } from "react";
import * as Sheet from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Gamepad } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet.Sheet open={open} onOpenChange={setOpen}>
      <Sheet.SheetTrigger asChild>
        <Button variant="ghost" className="w-10 px-0 sm:hidden">
          <Menu />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent side="right">
        <MobileLink href="/" className="flex space-x-2 items-center">
          <Gamepad />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            Github
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
          >
            Twitter
          </Link>
        </div>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      className={className}
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
