import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Like } from "../api/like";

export const useLikeArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: Like,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: (error) => {
      console.error("Ошибка при выполнении лайка:", error);
    },
  });
};
