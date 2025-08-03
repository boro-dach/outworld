"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { CreateVacancyDto } from "../model/schema";
import { IVacancy } from "../model/types";

export async function createVacancy(
  values: CreateVacancyDto
): Promise<IVacancy> {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token не найден в куках");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/vacancy/create`,
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка при создании вакансии:", error);
    throw error;
  }
}
