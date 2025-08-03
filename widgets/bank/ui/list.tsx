"use client";

import { useGetAllCards } from "@/entities/card/model/use-cards";
import BankCard from "@/entities/card/ui/card";
import React from "react";

const CardsList = () => {
  const { data, isLoading, error } = useGetAllCards();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке карт</div>;

  const reversedData = data ? [...data].reverse() : [];
  return (
    <div className="w-full py-4 flex flex-col gap-4 border-r pr-4">
      {reversedData?.map((card: any) => (
        <BankCard
          key={card.id}
          title={card.title}
          cardNumber={card.cardNumber}
          credits={card.credits}
          color={card.color}
        />
      ))}
      {data?.length === 0 && (
        <div>
          <p>У вас нет банковских карт</p>
        </div>
      )}
    </div>
  );
};

export default CardsList;
