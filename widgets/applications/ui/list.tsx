"use client";

import { ApplicationStatus } from "@/entities/application/model/types";
import { useApplicationsQuery } from "@/entities/application/model/use-applications";
import Application from "@/entities/application/ui/application";
import React from "react";

type ApplicationType = {
  id: string;
  text: string;
  status: ApplicationStatus;
};

const ApplicationsList = () => {
  const { data, isLoading, error } = useApplicationsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке заявок</div>;
  return (
    <div className="w-full py-4">
      {data?.map((application: ApplicationType) => (
        <Application
          key={application.id}
          text={application.text}
          status={application.status}
        />
      ))}
      {data?.length === 0 && (
        <div>
          <p>Заявок нет </p>
        </div>
      )}
    </div>
  );
};

export default ApplicationsList;
