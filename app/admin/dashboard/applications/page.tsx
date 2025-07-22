import RefreshApplicationsButton from "@/features/application/ui/refresh-button";
import AdminApplicationsList from "@/widgets/applications/ui/list-admin";
import React from "react";

const Applications = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-bold text-2xl">Заявки игроков:</h3>
        <RefreshApplicationsButton />
      </div>
      <AdminApplicationsList />
    </div>
  );
};

export default Applications;
