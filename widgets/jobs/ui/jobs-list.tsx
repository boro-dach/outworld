import { useJobsQuery } from "@/entities/job/model/use-jobs";
import JobBadge from "@/entities/job/ui/badge";
import { Jobs } from "@/entities/vacancy/model/schema";
import { Badge } from "@/shared/ui/badge";
import React from "react";

const JobsList = () => {
  const { data, isLoading, error } = useJobsQuery();

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {" "}
      {isLoading && <span>Loading...</span>}
      {error && <span>Error loading jobs</span>}
      {data && data.length === 0 && (
        <Badge className="bg-white text-black">Безработный</Badge>
      )}
      {data &&
        data.length > 0 &&
        data.map((job: Jobs, index: number) => (
          <JobBadge key={index} job={job} />
        ))}
    </div>
  );
};

export default JobsList;
