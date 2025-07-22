"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { bankcardSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { useCreateCard } from "@/entities/card/model/use-cards";
import { Input } from "@/shared/ui/input";

interface CreateBankcardFormProps {
  onSuccess?: () => void;
}

const CreateBankcardForm = ({ onSuccess }: CreateBankcardFormProps) => {
  const form = useForm<z.infer<typeof bankcardSchema>>({
    resolver: zodResolver(bankcardSchema),
    defaultValues: {
      title: "Основная",
      cardNumber: "12345678",
    },
  });

  const createBankcardMutation = useCreateCard();

  async function onSubmit(values: z.infer<typeof bankcardSchema>) {
    try {
      await createBankcardMutation.mutateAsync(values);
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Ошибка при создании банковской карты:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4 flex flex-col w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Название карты</FormLabel>
              <FormControl>
                <Input className="w-full text-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Номер карты</FormLabel>
              <FormControl>
                <Input className="w-full text-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={createBankcardMutation.isPending}
        >
          {createBankcardMutation.isPending ? "Создаём..." : "Создать"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateBankcardForm;
