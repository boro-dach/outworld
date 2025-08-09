import JobBadge from "@/entities/job/ui/badge";
import { Jobs } from "@/entities/vacancy/model/schema";
import CreateVacancyButton from "@/features/vacancy/ui/create-button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Collapsible } from "@/shared/ui/collapsible";
import { EmployeeType } from "@/widgets/companies/ui/list";
import CompanyVacanciesList from "@/widgets/vacancies/ui/company-list";
import Image from "next/image";
import React from "react";

interface CompanyProps {
  id: string;
  title: string;
  description: string;
  employeesCount: number;
  employees: EmployeeType[];
  ceoId: string;
}

const Company = ({
  id,
  title,
  description,
  employeesCount,
  employees,
  ceoId,
}: CompanyProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-lg">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>Количество сотрудников: {employeesCount}</p>
        <div className="flex flex-col gap-2">
          <ul>
            {employees.map((employee) => (
              <li
                key={employee.login}
                className="flex md:flex-row flex-col md:gap-4 gap-2 md:items-center border-y py-4"
              >
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    width={32}
                    height={32}
                    src={`https://mc-heads.net/avatar/${employee.login}/32`}
                    alt="Лицо работника в Minecraft"
                    className="rounded-sm"
                  />
                  <p className="text-xl font-bold">{employee.login}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-2 items-center">
                  {employee.id === ceoId && (
                    <JobBadge key="ceo" job={Jobs.CEO} />
                  )}
                  {employee.jobs.map((job) => (
                    <JobBadge key={job} job={job} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-center justify-between">
            <p className="text-xl font-bold">Вакансии:</p>
            <CreateVacancyButton companyId={id} />
          </div>
          <CompanyVacanciesList companyId={id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Company;
