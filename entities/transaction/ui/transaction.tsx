import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import Image from "next/image";
import React from "react";

export interface TransactionProps {
  cardNumber?: string;
  relatedCardId?: string;
  type: "DEPOSIT" | "WITHDRAW" | "TRANSFER_IN" | "TRANSFER_OUT";
  amount: number;
  status: "PENDING" | "COMPLETED" | "FAILED";
  user?: string;
}

const Transaction = ({
  cardNumber,
  relatedCardId,
  type,
  amount,
  status,
  user,
}: TransactionProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center font-bold w-full gap-2">
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
        {user && type === "TRANSFER_IN" ? (
          <>
            {" от "}
            <Image
              src={`https://mc-heads.net/avatar/${user}/32`}
              width={32}
              height={32}
              alt="лицо отправителя в MineCraft"
              className="rounded-sm"
            />
            {user}
          </>
        ) : (
          ""
        )}
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
