"use client";

import { Button } from "@/shared/ui/button";
import { Check, Loader2 } from "lucide-react";
import React from "react";

import { useApproveApplication } from "@/entities/application/model/use-applications";

interface ApproveApplicationButtonProps {
  applicationId: string;
}

const ApproveApplicationButton = ({
  applicationId,
}: ApproveApplicationButtonProps) => {
  const { mutate: approveApplication, isPending } = useApproveApplication();

  const handleApprove = () => {
    approveApplication(applicationId);
  };

  return (
    <Button
      onClick={handleApprove}
      className="w-8 h-8 cursor-pointer p-0"
      variant={"outline"}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Check className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ApproveApplicationButton;
