import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/site";
import React from "react";

export default async function Page() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage
              src="/avatar.jpg"
              alt={siteConfig.name}
            />
            <AvatarFallback>VJ</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.name}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eos
          rerum velit similique ratione ut facere deserunt, animi sunt. Optio
          nostrum doloremque tenetur ipsam deleniti tempora fuga quidem
          similique sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum odit perferendis minima delectus tenetur ipsum.
          Cumque, aut. Incidunt dolores, laudantium est, amet obcaecati facilis
          ipsum facere possimus et assumenda provident!
        </p>
      </div>
    </div>
  );
}
