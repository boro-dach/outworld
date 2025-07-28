"use client";

import { useGet } from "@/entities/transaction/model/use-transactions";
import Transaction from "@/entities/transaction/ui/transaction";
import React from "react";

const TransactionsList = () => {
  const { data, isLoading, error } = useGet();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке транзакций</div>;

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {data?.map((transaction: any) => (
        <Transaction
          key={transaction.id}
          cardNumber={transaction.card.cardNumber}
          relatedCardId={transaction.relatedCardId}
          user={transaction.user.login}
          type={transaction.type}
          amount={transaction.amount}
          status={transaction.status}
        />
      ))}
      {data?.length === 0 && (
        <div>
          <p>Вы ещё не совершали транзакций</p>
        </div>
      )}
    </div>
  );
};

export default TransactionsList;
