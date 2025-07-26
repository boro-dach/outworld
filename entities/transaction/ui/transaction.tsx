import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";

export interface TransactionProps {
  cardNumber?: string;
  relatedCardId?: string;
  type: "DEPOSIT" | "WITHDRAW" | "TRANSFER_IN" | "TRANSFER_OUT";
  amount: number;
  status: "PENDING" | "COMPLETED" | "FAILED";
}

const Transaction = ({
  cardNumber,
  relatedCardId,
  type,
  amount,
  status,
}: TransactionProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center font-bold gap-2">
        {type === "DEPOSIT"
          ? "Вклад на карту"
          : type === "WITHDRAW"
          ? "Вывод с карты"
          : type === "TRANSFER_IN"
          ? "Перевод на карту"
          : type === "TRANSFER_OUT"
          ? "Перевод с карты"
          : ""}{" "}
        {cardNumber ? cardNumber : relatedCardId}
      </CardHeader>
      <CardContent
        className={
          type === "DEPOSIT" || type === "TRANSFER_IN"
            ? "text-green-400"
            : type === "WITHDRAW" || type === "TRANSFER_OUT"
            ? "text-red-400"
            : ""
        }
      >
        {type === "DEPOSIT" || type === "TRANSFER_IN"
          ? "+"
          : type === "WITHDRAW" || type === "TRANSFER_OUT"
          ? "-"
          : ""}
        {amount + "АР"}
      </CardContent>
      <CardFooter
        className={
          status === "PENDING"
            ? "text-yellow-400"
            : status === "COMPLETED"
            ? "text-green-400"
            : status === "FAILED"
            ? "text-red-400"
            : ""
        }
      >
        {status === "PENDING"
          ? "В обработке.."
          : status === "COMPLETED"
          ? "Успешно"
          : status === "FAILED"
          ? "Неудачно("
          : ""}
      </CardFooter>
    </Card>
  );
};

export default Transaction;
