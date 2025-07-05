import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { ApplicationProps } from "../model/props";
import { ApplicationStatus } from "../model/types";

const Application = ({ text, status }: ApplicationProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="text-xl font-bold">Заявка</CardHeader>
      <CardContent>{text}</CardContent>
      <CardFooter
        className={
          status === ApplicationStatus.APPROVED
            ? "text-green-400"
            : status === ApplicationStatus.PENDING
            ? "text-yellow-400"
            : "text-red-400"
        }
      >
        {status === ApplicationStatus.APPROVED
          ? "Заявка одобрена, можете заходить на сервер!"
          : status === ApplicationStatus.PENDING
          ? "Заявка в обработке.."
          : "Заявка отклонена :("}
      </CardFooter>
    </Card>
  );
};

export default Application;
