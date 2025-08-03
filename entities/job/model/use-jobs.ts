import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../api/get";

export const useJobsQuery = () =>
  useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
