"use client";

import axios from "axios";
import Cookies from "js-cookie";

export async function createCard(values: any) {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/bank/create-card`,
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при создании банковской карты:", error);
    throw error;
  }
}
