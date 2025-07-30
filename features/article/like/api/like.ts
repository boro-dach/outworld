"use client";

import axios from "axios";
import Cookies from "js-cookie";

export async function Like(values: any) {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.post(
      "http://localhost:5000/article/like",
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при добавлении новости в понравившеися:", error);
    throw error;
  }
}
