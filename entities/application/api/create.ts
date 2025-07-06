"use client";

import axios from "axios";
import Cookies from "js-cookie";

export async function createApplication(values: any) {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/application/create`,
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при создании заявки:", error);
    throw error;
  }
}
