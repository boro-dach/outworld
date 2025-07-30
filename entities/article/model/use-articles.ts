import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllArticles } from "../api/get-all";
import { deleteArticle } from "../api/delete";
import { toast } from "sonner";

export const useArticlesQuery = () =>
  useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      toast.success("Новость успешно удалена");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка удаления новости";
      toast.error(message);
    },
  });
};
