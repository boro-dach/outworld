"use client";
import { useCompaniesQuery } from "@/entities/company/model/use-companies";
import Company from "@/entities/company/ui/company";
import { Jobs } from "@/entities/vacancy/model/schema";
import React from "react";

// Типы можно оставить как есть
export type EmployeeType = {
  login: string;
  jobs: Jobs[];
  id: string;
};

type CompanyType = {
  id: string;
  title: string;
  description: string;
  ceoId: string;
  employees: EmployeeType[];
};

const CompaniesList = () => {
  const { data, isLoading, error } = useCompaniesQuery();

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    console.error("Failed to load companies:", error);
    return <p>Ошибка при загрузке компаний</p>;
  }

  if (!data || data.length === 0) {
    return <p>Вы ещё не создавали компаний</p>;
  }

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {data.map((company: CompanyType) => (
        <Company
          key={company.id}
          id={company.id}
          title={company.title}
          description={company.description}
          employeesCount={company.employees.length}
          employees={company.employees}
          ceoId={company.ceoId}
        />
      ))}
    </div>
  );
};

export default CompaniesList;
