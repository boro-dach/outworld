"use client";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import React, { useEffect, useState } from "react";
import {
  useGetPlaytime,
  useGetRole,
  useIsVerified,
  useUserLogin,
} from "@/entities/user/lib/hooks";
import Image from "next/image";
import VerificationBadge from "@/entities/user/ui/verification-badge";
import { formatPlaytime } from "@/shared/lib/formatters/format-playtime";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PlayerCard = () => {
  const [mounted, setMounted] = useState(false);
  const {
    data: user,
    isLoading: loginLoading,
    error: loginError,
  } = useUserLogin();
  const {
    data: verificationData,
    isLoading: verificationLoading,
    error: verificationError,
  } = useIsVerified();
  const { data: role, isLoading: roleLoading, error: roleError } = useGetRole();
  const {
    data: playtime,
    isLoading: playtimeLoading,
    error: playtimeError,
  } = useGetPlaytime(user?.login);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card>
        <CardHeader>Загрузка...</CardHeader>
      </Card>
    );
  }

  if (loginLoading || verificationLoading || roleLoading || playtimeLoading) {
    return (
      <Card>
        <CardHeader>Загрузка...</CardHeader>
      </Card>
    );
  }

  if (loginError || verificationError || roleError || playtimeLoading) {
    return (
      <Card>
        <CardHeader>Ошибка загрузки</CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 text-2xl font-bold">
        <Image
          src={`https://mc-heads.net/avatar/${user?.login}/32`}
          width={32}
          height={32}
          alt="Ваше лицо в MineCraft"
          className="rounded-sm"
        />
        {user?.login || "Нет данных"}
        <VerificationBadge isVerified={verificationData?.isVerified} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          Ваша роль: {role?.role === "ADMIN" ? "Администратор" : "Игрок"}{" "}
          {role?.role === "ADMIN" ? (
            <Link
              href={"/admin/dashboard/applications"}
              className="text-blue-400"
            >
              <div className="flex flex-row items-center">
                админ-панель <ArrowUpRight size={18} />
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
        <p>Время на сервере: {formatPlaytime(playtime)}</p>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
