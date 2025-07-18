import axios from "axios";
import Cookies from "js-cookie";

export interface UserLoginResponse {
  login: string;
}

export const getLogin = async (): Promise<UserLoginResponse> => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    throw new Error("Access token не найден в куках");
  }

  const response = await axios.post<UserLoginResponse>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/get-login`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
