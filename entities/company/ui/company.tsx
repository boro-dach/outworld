import JobBadge from "@/entities/job/ui/badge";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import { Collapsible } from "@/shared/ui/collapsible";
import { EmployeeType } from "@/widgets/companies/ui/list";
import Image from "next/image";
import React from "react";

interface CompanyProps {
  title: string;
  description: string;
  employeesCount: number;
  employees: EmployeeType[];
}

const Company = ({
  title,
  description,
  employeesCount,
  employees,
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
                className="flex flex-row gap-2 items-center border-y py-4"
              >
                <Image
                  width={32}
                  height={32}
                  src={`https://mc-heads.net/avatar/${employee.login}/32`}
                  alt="Лицо работника в Minecraft"
                  className="rounded-sm"
                />
                <p className="text-xl font-bold">{employee.login}</p>
                {employee.jobs.map((job) => (
                  <JobBadge key={job} job={job} />
                ))}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Company;
