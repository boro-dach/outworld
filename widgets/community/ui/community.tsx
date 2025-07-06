import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

const Enhanced = () => {
  return (
    <Card className="w-full border-transparent">
      <CardHeader>
        <CardTitle className="text-2xl">
          Доброе комьюнити, отзывчивая администрация
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1">
        На нашем сервере действует система заявок, которая помогает отбирать
        только адекватных и ролевых игроков. За порядком в игре следит
        внимательная администрация, всегда готовая прийти на помощь и поддержать
        дружелюбную атмосферу.
      </CardContent>
    </Card>
  );
};

export default Enhanced;
