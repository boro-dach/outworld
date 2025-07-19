import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getApplications } from "@/entities/application/api/get";
import { getAllApplications } from "@/entities/application/api/get-all";
import { createApplication } from "../api/create";
import { deleteApplication } from "../api/delete";
import { approveApplication } from "../api/approve";
import { rejectApplication } from "../api/reject";

// Ключи для управления кэшем
export const applicationKeys = {
  all: ["applications", "all"] as const,
  my: ["applications", "my"] as const,
};

export const useUserApplications = () =>
  useQuery({
    queryKey: applicationKeys.my,
    queryFn: getApplications,
    refetchInterval: 60000,
  });

export const useAllApplications = () =>
  useQuery({
    queryKey: applicationKeys.all,
    queryFn: getAllApplications,
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
  });

export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Заявка успешно создана!");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка создания заявки";
      toast.error(message);
    },
  });
};

export const useDeleteApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Заявка успешно удалена");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка удаления заявки";
      toast.error(message);
    },
  });
};

export const useApproveApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: approveApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Заявка успешно подтверждена");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка подтверждения заявки";
      toast.error(message);
    },
  });
};

export const useRejectApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rejectApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Заявка успешно отклонена");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка отклонения заявки";
      toast.error(message);
    },
  });
};
