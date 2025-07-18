import { useQuery } from "@tanstack/react-query";
import { userQueries } from "../model/queries";
import { getLogin } from "../api/get-login";
import { getIsVerified } from "../api/get-is-verified";
import { getRole } from "../api/get-role";
import { getPlaytime } from "../api/get-playtime";

export const useUserLogin = () => {
  return useQuery({
    queryKey: userQueries.login(),
    queryFn: getLogin,
    retry: false,
  });
};

export const useIsVerified = () => {
  return useQuery({
    queryKey: userQueries.isVerified(),
    queryFn: getIsVerified,
    retry: false,
  });
};

export const useGetRole = () => {
  return useQuery({
    queryKey: userQueries.role(),
    queryFn: getRole,
    retry: false,
  });
};

export const useGetPlaytime = (playerName: string | undefined) => {
  return useQuery({
    queryKey: ["playerPlaytime", playerName],

    queryFn: () => getPlaytime(playerName!),

    enabled: !!playerName,
  });
};
