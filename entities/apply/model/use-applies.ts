import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

import { apply } from "../api/apply";
import { accept } from "../api/accept";
import { reject } from "../api/reject";
import { getAppliesByUser } from "../api/get-by-user";
import { getAppliesByVacancy } from "../api/get-by-vacancy";

export const vacancyResponseKeys = {
  all: ["vacancyResponses"] as const,
  byUser: () => [...vacancyResponseKeys.all, "byUser"] as const,
  byVacancy: (vacancyId: string) =>
    [...vacancyResponseKeys.all, "byVacancy", vacancyId] as const,
};

export const useUserVacancyResponsesQuery = () =>
  useQuery({
    queryKey: vacancyResponseKeys.byUser(),
    queryFn: getAppliesByUser,
  });

export const useVacancyResponsesByVacancyQuery = (vacancyId: string) =>
  useQuery({
    queryKey: vacancyResponseKeys.byVacancy(vacancyId),
    queryFn: () => getAppliesByVacancy(vacancyId),
    enabled: !!vacancyId,
  });

export const useApplyToVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: vacancyResponseKeys.byUser() });
      toast.success("Вы успешно откликнулись на вакансию!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при отклике на вакансию";
      toast.error(message);
    },
  });
};

export const useAcceptVacancyResponse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accept,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: vacancyResponseKeys.all });
      toast.success("Отклик успешно принят!");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при принятии отклика";
      toast.error(message);
    },
  });
};

export const useRejectVacancyResponse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: vacancyResponseKeys.all });
      toast.success("Отклик отклонен.");
    },
    onError: (error: AxiosError<any>) => {
      const message =
        error.response?.data?.message || "Ошибка при отклонении отклика";
      toast.error(message);
    },
  });
};
