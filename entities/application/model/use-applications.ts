import { useQuery } from "@tanstack/react-query";
import { getApplications } from "@/entities/application/api/get";

export const useApplicationsQuery = () =>
  useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });
