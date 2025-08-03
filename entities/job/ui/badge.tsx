import { Jobs } from "@/entities/vacancy/model/schema";
import { Badge } from "@/shared/ui/badge";
import React from "react";

const JobBadge = ({ job }: { job: Jobs }) => {
  return (
    <Badge
      className={
        job === Jobs.BANKER
          ? "bg-green-600"
          : job === Jobs.BUSINESSMAN
          ? "bg-blue-500"
          : job === Jobs.JOURNALIST
          ? "bg-amber-500 text-white"
          : job === Jobs.OTHER
          ? "Другое"
          : ""
      }
    >
      {job === Jobs.BANKER
        ? "Банкир"
        : job === Jobs.BUSINESSMAN
        ? "Предприниматель"
        : job === Jobs.JOURNALIST
        ? "Журналист"
        : job === Jobs.OTHER
        ? "Другое"
        : ""}
    </Badge>
  );
};

export default JobBadge;
