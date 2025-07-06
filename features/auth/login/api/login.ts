import { saveAccessToken } from "@/shared/lib/cookies/save-access-token";
import axios from "axios";
import { toast } from "sonner";

export async function login(values: any) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      values
    );

    if (!response.data.accessToken) {
      throw Error("accessToken not found in response.");
    }
    saveAccessToken(response.data.accessToken);

    toast.success("Успешный вход!");
    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Неизвестная ошибка";

    toast.error(`Ошибка входа: ${message}`);
    throw error;
  }
}
