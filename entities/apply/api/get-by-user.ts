"use client";

import axios from "axios";
import Cookies from "js-cookie";

export async function getAppliesByUser() {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/vacancy/get-applies-by-user`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении откликов:", error);
    throw error;
  }
}
