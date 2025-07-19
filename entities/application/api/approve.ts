"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { ApplicationStatus } from "../model/types";

export async function approveApplication(id: string) {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/application/update-status`,
      {
        id: id,
        status: ApplicationStatus.APPROVED,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при подтверждении заявки:", error);
    throw error;
  }
}
