"use client";

import { ApplicationStatus } from "@/entities/application/model/types";
import { useAllApplications } from "@/entities/application/model/use-applications";
import AdminApplication from "@/entities/application/ui/appplication-admin";
import React from "react";

type ApplicationType = {
  user: any;
  id: string;
  text: string;
  status: ApplicationStatus;
};

const AdminApplicationsList = () => {
  const { data, isLoading, error } = useAllApplications();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке заявок</div>;

  const reversedData = data ? [...data].reverse() : [];
  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {reversedData?.map((application: ApplicationType) => (
        <AdminApplication
          login={application.user.login}
          key={application.id}
          applicationId={application.id}
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

export default AdminApplicationsList;
