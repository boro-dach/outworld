import { Button } from "@/shared/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center h-16 px-4 border-b border-zinc-800">
      <Image
        src={"/outworld_logo.png"}
        width={40}
        height={40}
        alt="logo"
        className="rounded-lg"
      />
      <div className="flex justify-center">
        <Link href={"/"}>Главная</Link>
      </div>
      <div className="flex gap-4 justify-end">
        <Link href={"/auth/register"}>
          <Button className="cursor-pointer">Начать игру</Button>
        </Link>
        <Link href={"/auth/login"}>
          <Button variant="secondary" className="cursor-pointer">
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
