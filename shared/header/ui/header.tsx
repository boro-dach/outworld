"use client";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { LayoutDashboard, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Header = () => {
  const pathname = usePathname();
  const shouldShowHeader = !pathname.startsWith("/dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsAuthenticated(!!accessToken);
    setIsLoading(false);
  }, []);

  if (!shouldShowHeader) return null;

  return (
    <div className="grid grid-cols-3 items-center h-16 px-4 md:px-8 border-b border-zinc-800 z-50 sticky top-0 bg backdrop-blur-md bg-opacity-70">
      <div className="flex items-center gap-2">
        <Image
          src={"/outworld_logo.png"}
          width={40}
          height={40}
          alt="logo"
          className="rounded-lg"
        />
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 w-10">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 p-2">
              <Link href={"/"} className="hover:underline transition-colors">
                Главная
              </Link>
              <Link
                href={"https://discord.gg/E2UeKHhKTg"}
                className="hover:underline transition-colors"
              >
                Discord
              </Link>
              <Link
                href={"https://donatepay.eu/don/urjustwannabe"}
                className="hover:underline transition-colors"
              >
                Поддержать
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="hidden md:flex md:flex-row md:gap-4">
          <Link href={"/"} className="hover:text-primary transition-colors">
            Главная
          </Link>
          <Link
            href={"https://discord.gg/E2UeKHhKTg"}
            className="hover:text-primary transition-colors"
          >
            Discord
          </Link>
          <Link
            href={"https://donatepay.eu/don/urjustwannabe"}
            className="hover:text-primary transition-colors"
          >
            Поддержать
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 justify-end">
        {isLoading ? (
          <div className="w-32 h-10 bg-zinc-400 animate-pulse rounded"></div>
        ) : isAuthenticated ? (
          <Link href={"/dashboard/applications"}>
            <Button variant="outline" className="h-10 w-10">
              <LayoutDashboard />
            </Button>
          </Link>
        ) : (
          <>
            <Link href={"/auth/register"}>
              <Button className="cursor-pointer">Начать игру</Button>
            </Link>
            <Link href={"/auth/login"}>
              <Button variant="secondary" className="cursor-pointer">
                Войти
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
