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
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { companySchema } from "../model/schema";
import { useCreateCompany } from "@/entities/company/model/use-companies";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useGetAllCards } from "@/entities/card/model/use-cards";

interface CreateCompanyFormProps {
  onSuccess?: () => void;
}

const CreateCompanyForm = ({ onSuccess }: CreateCompanyFormProps) => {
  // Destructure all relevant states from the hook
  const { data: cards, isLoading, isError } = useGetAllCards();

  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      title: "",
      description: "",
      payCard: "",
    },
  });

  const createCompanyMutation = useCreateCompany();

  async function onSubmit(values: z.infer<typeof companySchema>) {
    try {
      await createCompanyMutation.mutateAsync(values);
      form.reset();
      onSuccess?.();
    } catch (error) {
      // It's better to show the error to the user in a real app
      console.error("Ошибка при создании компании:", error);
    }
  }

  // --- Start of Fix ---

  // While loading, you can disable the select or show a message
  if (isLoading) {
    // This is just one example, you could show a spinner or a skeleton loader
    // inside the SelectContent as well.
    // For simplicity, we'll just show a loading message in the trigger.
  }

  // Handle the case where the data fetch failed
  if (isError) {
    return (
      <p className="text-destructive">
        Не удалось загрузить карты. Попробуйте позже.
      </p>
    );
  }

  // --- End of Fix ---

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
              <FormLabel className="text-lg">Название компании</FormLabel>
              <FormControl>
                <Input className="w-full text-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Описание</FormLabel>
              <FormControl>
                <Input className="w-full text-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="payCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Стоимость создания компании: 32АР
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isLoading}
              >
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        isLoading
                          ? "Загрузка карт..."
                          : "Выберите карту для списания"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cards && cards.length > 0 ? (
                    cards.map((card: any) => (
                      <SelectItem
                        key={card.id}
                        value={card.cardNumber}
                        className="p-2"
                      >
                        {card.title} (•••• {card.cardNumber.slice(-4)}) -{" "}
                        {card.credits} АР
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="no-cards" disabled>
                      Нет доступных карт
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>
          При создании компании вы автоматически становитесь предпринимателем
        </p>
        <Button
          className="w-full"
          type="submit"
          disabled={
            createCompanyMutation.isPending || !cards || cards.length === 0
          }
        >
          {createCompanyMutation.isPending ? "Создаём..." : "Создать"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCompanyForm;
