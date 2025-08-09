import VacanciesList from "@/widgets/vacancies/ui/list";
import React from "react";

const Vacancies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-bold text-2xl">Вакансии:</h3>
      </div>
      <VacanciesList />
    </div>
  );
};

export default Vacancies;
