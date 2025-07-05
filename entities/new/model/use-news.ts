import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../api/get-all";

export const useNewsQuery = () =>
  useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });
