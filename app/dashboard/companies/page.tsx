import CreateCompanyButton from "@/features/companies/ui/create-button";
import CompaniesList from "@/widgets/companies/ui/list";
import React from "react";

const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-bold text-2xl">Ваши компании:</h3>
        <CreateCompanyButton />
      </div>
      <CompaniesList />
    </div>
  );
};

export default Companies;
