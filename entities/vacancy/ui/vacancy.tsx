import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { SalaryType } from "../model/schema";
import { IVacancy } from "../model/types";
import { getSalaryPeriod } from "../lib/get-salary-period";
import JobBadge from "@/entities/job/ui/badge";
import CreateApplyButton from "@/features/apply/ui/apply-button";
import { useUserVacancyResponsesQuery } from "@/entities/apply/model/use-applies";
import { ApplyStatusEnum } from "@/entities/apply/model/enums";

const Vacancy = ({
  id,
  title,
  description,
  salary,
  occupation,
  company,
}: IVacancy) => {
  const {
    data: allUserResponses,
    isLoading,
    error,
  } = useUserVacancyResponsesQuery();

  const renderFooterContent = () => {
    if (isLoading) {
      return (
        <p className="text-sm text-muted-foreground">Загрузка статуса...</p>
      );
    }

    if (error) {
      console.error("Failed to fetch vacancy response:", error);
      return (
        <p className="text-sm text-destructive">
          Не удалось загрузить статус отклика.
        </p>
      );
    }

    const responseForThisVacancy = allUserResponses?.find(
      (response: any) => response.vacancyId === id
    );

    if (!responseForThisVacancy) {
      return <CreateApplyButton vacancyId={id} />;
    }

    if (responseForThisVacancy.status === ApplyStatusEnum.ACCEPTED) {
      return (
        <p className="text-green-400">Вас приняли на работу, поздравляем!</p>
      );
    }

    if (responseForThisVacancy.status === ApplyStatusEnum.PENDING) {
      return <p className="text-yellow-400">Ждём отклика от работодателя..</p>;
    }

    if (responseForThisVacancy.status === ApplyStatusEnum.REJECTED) {
      return <p className="text-red-400">К сожалению, вам отказали(</p>;
    }

    return <CreateApplyButton vacancyId={id} />;
  };

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
      <CardFooter>{renderFooterContent()}</CardFooter>
    </Card>
  );
};

export default Vacancy;
