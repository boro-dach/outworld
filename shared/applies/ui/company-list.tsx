import { useVacancyResponsesByVacancyQuery } from "@/entities/apply/model/use-applies";
import CompanyApply from "@/entities/apply/ui/company-apply";
import React from "react";

const CompanyAppliesList = ({ vacancyId }: { vacancyId: string }) => {
  const { data, isLoading, error } =
    useVacancyResponsesByVacancyQuery(vacancyId);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке откликов</div>;
  if (!data || data.length === 0)
    return <div>Нет откликов на эту вакансию</div>;

  return (
    <div className="flex flex-col gap-4">
      {data.map((apply: any) => (
        <CompanyApply
          key={apply.id}
          coverLetter={apply.coverLetter}
          login={apply.user.login}
          applyId={apply.id}
          status={apply.status}
        />
      ))}
    </div>
  );
};

export default CompanyAppliesList;
