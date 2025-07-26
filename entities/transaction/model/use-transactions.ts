"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "../api/get";
import { deposit } from "../api/deposit";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { confirmDeposit } from "../api/confirm-deposit";
import { withdraw } from "../api/withdraw";
import { confirmWithdraw } from "../api/confirm-withdraw";

export const transactionKeys = {
  all: ["transactions"] as const,
};

export const useGet = ({ enabled = true } = ({} = {})) =>
  useQuery({
    queryKey: transactionKeys.all,
    queryFn: get,
    enabled,
  });

export const useDeposit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deposit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.all });
      toast.success("Заявка на вклад успешно создана!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при создании заявки на вклад";
      toast.error(message);
    },
  });
};

export const useConfirmDeposit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: confirmDeposit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.all });
      toast.success("Заявка на вклад успешно подтверждена!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message ||
        "Ошибка при подтверждении заявки на вклад";
      toast.error(message);
    },
  });
};

export const useWithdraw = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.all });
      toast.success("Заявка на вывод успешно создана!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при создании заявки на вывод";
      toast.error(message);
    },
  });
};

export const useConfirmWithdraw = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: confirmWithdraw,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: transactionKeys.all });
      toast.success("Заявка на вывод успешно подтверждена!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message ||
        "Ошибка при подтверждении заявки на вывод";
      toast.error(message);
    },
  });
};
