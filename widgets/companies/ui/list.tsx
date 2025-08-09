"use client";
import { useCompaniesQuery } from "@/entities/company/model/use-companies";
import Company from "@/entities/company/ui/company";
import { Jobs } from "@/entities/vacancy/model/schema";
import React from "react";

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

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка при загрузке компаний</p>}
      {data.length === 0 || (!data && <p>Вы ещё не создавали компаний</p>)}
      {data &&
        data.map((company: CompanyType) => (
          <Company
            key={company.id}
            title={company.title}
            description={company.description}
            employeesCount={company.employees.length}
            employees={company.employees}
            id={company.id}
            ceoId={company.ceoId}
          />
        ))}
    </div>
  );
};

export default CompaniesList;
