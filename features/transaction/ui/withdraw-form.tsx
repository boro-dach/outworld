"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

import { useGetAllCards } from "@/entities/card/model/use-cards";
import { withdrawSchema } from "../model/schema";
import {
  useDeposit,
  useWithdraw,
} from "@/entities/transaction/model/use-transactions";

interface WithdrawFormProps {
  onSuccess: (data: { withdrawCode: string }) => void;
}

export function WithdrawForm({ onSuccess }: WithdrawFormProps) {
  const { data: cards, isLoading, isError } = useGetAllCards();

  const form = useForm<z.infer<typeof withdrawSchema>>({
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      cardNumber: "",
      amount: undefined,
    },
  });

  const withdrawMutation = useWithdraw();

  async function onSubmit(values: z.infer<typeof withdrawSchema>) {
    try {
      const response = await withdrawMutation.mutateAsync(values);

      form.reset();

      if (response && response.withdrawCode) {
        onSuccess?.({ withdrawCode: response.withdrawCode });
      } else {
        console.error("Withdraw code не был получен в ответе");
      }
    } catch (error) {
      console.error("Ошибка при создании заявки на вывод:", error);
    }
  }

  if (isLoading) {
    return <div>Загрузка ваших карт...</div>;
  }

  if (isError || !cards) {
    return <div>Не удалось загрузить карты. Пожалуйста, попробуйте позже.</div>;
  }

  if (cards.length === 0) {
    return (
      <div>У вас пока нет карт. Создайте первую, чтобы совершать переводы.</div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4 flex flex-col w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">С карты</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите карту для вывода" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cards.map((card: any) => (
                    <SelectItem
                      key={card.id}
                      value={card.cardNumber}
                      className="p-2"
                    >
                      {card.title} (•••• {card.cardNumber.slice(-4)}) -{" "}
                      {card.credits} АР
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Сумма</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="w-full text-sm"
                  placeholder="0"
                  {...field}
                  onChange={(event) =>
                    field.onChange(
                      event.target.value === ""
                        ? undefined
                        : +event.target.value
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full"
          type="submit"
          disabled={withdrawMutation.isPending}
        >
          {withdrawMutation.isPending ? "Отправляем..." : "Вывод"}
        </Button>
      </form>
    </Form>
  );
}

export default WithdrawForm;
