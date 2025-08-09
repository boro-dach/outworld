import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { SalaryType } from "../model/schema";
import { IVacancy } from "../model/types";
import { getSalaryPeriod } from "../lib/get-salary-period";
import JobBadge from "@/entities/job/ui/badge";
import CreateApplyButton from "@/features/apply/ui/apply-button";
import CompanyAppliesList from "@/shared/applies/ui/company-list";

const CompanyVacancy = ({
  id,
  title,
  description,
  salary,
  occupation,
  company,
}: IVacancy) => {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <p className="text-xl font-bold">{title}</p>
          <JobBadge job={occupation} />
        </div>
        <p className="text-lg">{company.title}</p>
        <p className="text-lg">
          {salary.type === SalaryType.FIXED
            ? `${salary.fixedAmount}АР ${getSalaryPeriod(salary.period)}`
            : salary.type === SalaryType.RANGE
            ? `от ${salary.minAmount}АР до ${
                salary.maxAmount
              }АР ${getSalaryPeriod(salary.period)}`
            : ""}
        </p>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="w-full items-start flex flex-col gap-2">
        <p className="text-xl font-bold">Отклики:</p>
        <CompanyAppliesList vacancyId={id} />
      </CardFooter>
    </Card>
  );
};

export default CompanyVacancy;
