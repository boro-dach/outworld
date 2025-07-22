"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import { useAllApplications } from "@/entities/application/model/use-applications";
import { Loader2, RefreshCw } from "lucide-react";

const RefreshApplicationsButton = () => {
  const { refetch, isFetching } = useAllApplications();

  const handleRefresh = () => {
    refetch();
  };

  return (
    <Button
      onClick={handleRefresh}
      className="w-8 h-8 cursor-pointer p-0"
      variant={"outline"}
      disabled={isFetching}
    >
      {isFetching ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <RefreshCw className="h-4 w-4" />
      )}
    </Button>
  );
};

export default RefreshApplicationsButton;
