"use client";
import { IVacancy } from "@/entities/vacancy/model/types";
import {
  useVacanciesByCompanyQuery,
  useVacanciesQuery,
} from "@/entities/vacancy/model/use-vacancies";
import CompanyVacancy from "@/entities/vacancy/ui/company-vacancy";
import React from "react";

const CompanyVacanciesList = ({ companyId }: { companyId: string }) => {
  const { data, isLoading, error } = useVacanciesByCompanyQuery(companyId);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке вакансий</div>;

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {data?.map((vacancy: IVacancy) => (
        <CompanyVacancy key={vacancy.id} {...vacancy} />
      ))}
      {data?.length === 0 && (
        <div>
          <p>У этой компании ещё нет вакансий</p>
        </div>
      )}
    </div>
  );
};

export default CompanyVacanciesList;
