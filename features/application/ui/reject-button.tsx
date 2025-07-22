"use client";

import { useRejectApplication } from "@/entities/application/model/use-applications";
import { Button } from "@/shared/ui/button";
import { Loader2, X } from "lucide-react";
import React from "react";

interface RejectApplicationButtonProps {
  applicationId: string;
}

const RejectApplicationButton = ({
  applicationId,
}: RejectApplicationButtonProps) => {
  const { mutate: rejectApplication, isPending } = useRejectApplication();

  const handleReject = () => {
    rejectApplication(applicationId);
  };

  return (
    <Button
      onClick={handleReject}
      className="w-8 h-8 cursor-pointer p-0"
      variant={"outline"}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <X className="h-4 w-4" />
      )}
    </Button>
  );
};

export default RejectApplicationButton;
