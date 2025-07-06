import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getApplications } from "@/entities/application/api/get";
import { createApplication } from "../api/create";
import { toast } from "sonner";

export const useApplications = () =>
  useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["applications"] });
      toast.success("Заявка успешно создана!");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка создания заявки";
      toast.error(message);
    },
  });
};
