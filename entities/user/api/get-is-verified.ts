import axios from "axios";
import Cookies from "js-cookie";

export interface IsVerifiedResponse {
  isVerified: boolean;
}

export const getIsVerified = async (): Promise<IsVerifiedResponse> => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    throw new Error("Access token не найден в куках");
  }

  const response = await axios.post<IsVerifiedResponse>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/is-verified`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
