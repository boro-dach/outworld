"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { getAllCards } from "../api/get-all";
import { createCard } from "../api/create";
import { sendToCard } from "../api/send";
import { transactionKeys } from "@/entities/transaction/model/use-transactions";

export const cardKeys = {
  all: ["cards"] as const,
};

export const useGetAllCards = ({ enabled = true } = {}) =>
  useQuery({
    queryKey: cardKeys.all,
    queryFn: getAllCards,
    enabled,
  });

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cardKeys.all });
      toast.success("Карта успешно создана!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при создании карты";
      toast.error(message);
    },
  });
};

export const useSendToCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendToCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cardKeys.all });
      queryClient.invalidateQueries({ queryKey: transactionKeys.all });

      toast.success("Средства успешно отправлены!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при отправке средств";
      toast.error(message);
    },
  });
};
