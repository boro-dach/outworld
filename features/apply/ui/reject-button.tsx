"use client";
import { useRejectVacancyResponse } from "@/entities/apply/model/use-applies";
import { Button } from "@/shared/ui/button";
import { X } from "lucide-react";
import React from "react";

interface RejectApplyButtonProps {
  applyId: string;
}

const RejectApplyButton = ({ applyId }: RejectApplyButtonProps) => {
  const { mutate: rejectApply, isPending } = useRejectVacancyResponse();

  const handleAccept = (applyId: string) => {
    rejectApply({ applyId: applyId });
  };

  return (
    <Button
      className="w-8 h-8 cursor-pointer"
      variant={"secondary"}
      onClick={() => {
        handleAccept(applyId);
      }}
    >
      <X />
    </Button>
  );
};

export default RejectApplyButton;
