"use client";
import { IVacancy } from "@/entities/vacancy/model/types";
import { useVacanciesQuery } from "@/entities/vacancy/model/use-vacancies";
import Vacancy from "@/entities/vacancy/ui/vacancy";
import React from "react";

const VacanciesList = () => {
  const { data, isLoading, error } = useVacanciesQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке вакансий</div>;

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {data?.map((vacancy: IVacancy) => (
        <Vacancy key={vacancy.id} {...vacancy} />
      ))}
      {data?.length === 0 && (
        <div>
          <p>Нет доступных вакансий</p>
        </div>
      )}
    </div>
  );
};

export default VacanciesList;
