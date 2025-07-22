import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { BankCardProps } from "../model/props";

const BankCard = ({ title, credits, color, cardNumber }: BankCardProps) => {
  return (
    <Card className={`bg-[${color}]`}>
      <CardHeader className="text-xl font-bold">{title}</CardHeader>
      <CardContent>Баланс: {credits}АР</CardContent>
      <CardFooter>Номер карты: {cardNumber}</CardFooter>
    </Card>
  );
};

export default BankCard;
