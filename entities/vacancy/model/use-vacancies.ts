import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllVacancies } from "../api/get-all";
import { createVacancy } from "../api/create";
import { toast } from "sonner";
import { getVacanciesByCompany } from "../api/get-by-company";

export const useVacanciesQuery = () =>
  useQuery({
    queryKey: ["vacancies"],
    queryFn: getAllVacancies,
  });

export const useCreateVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createVacancy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
      toast.success("Вакансия успешно создана");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка создания вакансии";
      toast.error(message);
    },
  });
};
export const useVacanciesByCompanyQuery = (companyId: string) =>
  useQuery({
    queryKey: ["vacancies", "company", companyId],
    queryFn: () => getVacanciesByCompany(companyId),
    enabled: !!companyId,
  });
