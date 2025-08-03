"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyCompanies } from "../api/get-my";
import { createCompany } from "../api/create";
import { toast } from "sonner";

export const useCompaniesQuery = () =>
  useQuery({
    queryKey: ["companies"],
    queryFn: getMyCompanies,
  });

export const useCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      toast.success("Компания успешно создана");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка создания компании";
      toast.error(message);
    },
  });
};
