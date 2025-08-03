import { Card, CardHeader } from "@/shared/ui/card";
import React from "react";
import { PaymentPeriod, SalaryType } from "../model/schema";
import { IVacancy } from "../model/types";
import { getSalaryPeriod } from "../lib/get-salary-period";

const Vacancy = ({ title, salary }: IVacancy) => {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-lg">
          {salary.type === SalaryType.FIXED
            ? `${salary.fixedAmount} ${getSalaryPeriod(salary.period)}`
            : salary.type === SalaryType.RANGE
            ? `от ${salary.minAmount} до ${salary.maxAmount} ${getSalaryPeriod(
                salary.period
              )}`
            : ""}
        </p>
      </CardHeader>
    </Card>
  );
};

export default Vacancy;
