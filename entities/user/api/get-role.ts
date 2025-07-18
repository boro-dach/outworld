import axios from "axios";
import Cookies from "js-cookie";

export interface getRoleResponse {
  role: "USER" | "ADMIN";
}

export const getRole = async (): Promise<getRoleResponse> => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    throw new Error("Access token не найден в куках");
  }

  const response = await axios.post<getRoleResponse>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/get-role`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
