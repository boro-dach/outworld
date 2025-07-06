import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

const Nobullshit = () => {
  return (
    <Card className="w-full border-transparent">
      <CardHeader>
        <CardTitle className="text-2xl">
          Никаких приватов, кейсов, донатов
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1">
        На нашем сервере вы не сможете заприватить свой дом, купить привелегии,
        задонатить на кейс с оружием которое убивает всех с одного удара и
        откупиться от бана. Разве это не прекрасно?
      </CardContent>
    </Card>
  );
};

export default Nobullshit;
