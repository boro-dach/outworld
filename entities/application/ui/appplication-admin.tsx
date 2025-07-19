import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { AdminApplicationProps, ApplicationProps } from "../model/props";
import { ApplicationStatus } from "../model/types";
import Image from "next/image";
import DeleteApplicationButton from "@/features/application/ui/delete-application-button";
import ApproveApplicationButton from "@/features/application/ui/approve-application-button";
import RejectApplicationButton from "@/features/application/ui/reject-application-button";

const AdminApplication = ({
  text,
  status,
  login,
  applicationId,
}: AdminApplicationProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="text-xl font-bold flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          Заявка от
          <Image
            src={`https://mc-heads.net/avatar/${login}/32`}
            width={32}
            height={32}
            alt="Ваше лицо в MineCraft"
            className="rounded-sm"
          />
          {login}
        </div>
        <div className="md:flex flex-row gap-2 hidden">
          <ApproveApplicationButton applicationId={applicationId} />
          <RejectApplicationButton applicationId={applicationId} />
          <DeleteApplicationButton applicationId={applicationId} />
        </div>
      </CardHeader>
      <CardContent>Текст заявки: {text}</CardContent>
      <CardFooter className="flex flex-col gap-2 items-start w-full">
        <div
          className={
            status === ApplicationStatus.APPROVED
              ? "text-green-400"
              : status === ApplicationStatus.PENDING
              ? "text-yellow-400"
              : "text-red-400"
          }
        >
          {status === ApplicationStatus.APPROVED
            ? "Заявка одобрена"
            : status === ApplicationStatus.PENDING
            ? "Заявка на рассмотрении.."
            : "Заявка отклонена :("}
        </div>

        <div className="flex flex-row gap-2 md:hidden">
          <ApproveApplicationButton applicationId={applicationId} />
          <RejectApplicationButton applicationId={applicationId} />
          <DeleteApplicationButton applicationId={applicationId} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default AdminApplication;
