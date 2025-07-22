import CreateApplicationButton from "@/features/application/ui/create-button";
import ApplicationsList from "@/widgets/applications/ui/list";
import React from "react";

const Applications = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-bold text-2xl">Ваши заявки:</h3>
        <CreateApplicationButton />
      </div>
      <ApplicationsList />
    </div>
  );
};

export default Applications;
