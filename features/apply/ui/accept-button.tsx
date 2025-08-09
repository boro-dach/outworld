"use client";
import { useAcceptVacancyResponse } from "@/entities/apply/model/use-applies";
import { Button } from "@/shared/ui/button";
import { Check } from "lucide-react";
import React from "react";

interface AcceptApplyButtonProps {
  applyId: string;
}

const AcceptApplyButton = ({ applyId }: AcceptApplyButtonProps) => {
  const { mutate: acceptApply, isPending } = useAcceptVacancyResponse();

  const handleAccept = (applyId: string) => {
    acceptApply({ applyId: applyId });
  };

  return (
    <Button
      className="w-8 h-8 cursor-pointer"
      variant={"secondary"}
      onClick={() => {
        handleAccept(applyId);
      }}
    >
      <Check />
    </Button>
  );
};

export default AcceptApplyButton;
