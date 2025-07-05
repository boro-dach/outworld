"use client";

import axios from "axios";
import Cookies from "js-cookie";

export async function getAllNews(values: any) {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.post(
      "http://localhost:5000/articles/get-all",
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении заявок:", error);
    throw error;
  }
}
