import { Button } from "@/shared/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold font-unbounded">
        <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
          outworld
        </span>{" "}
        - мир за гранью реальности
      </h1>
      <p className="text-zinc-400 max-w-4xl">
        outworld это Vanilla+ RolePlay сервер Minecraft, на котором ты можешь
        стать кем угодно. Создай свой город, устройся на работу, запусти свой
        бизнес, найди новых друзей, участвуй в ивентах, и ещё куча возможностей.
      </p>
      <div className="grid grid-cols-2 grid-rows-1 items-center justify-between gap-4">
        <Link href={"/auth/register"}>
          <Button className="cursor-pointer w-full">Начать игру</Button>
        </Link>
        <Link href={"#more"}>
          <Button variant="outline" className="cursor-pointer w-full">
            Я ещё посмотрю..
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
