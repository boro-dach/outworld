"use client";

import { Button } from "@/shared/ui/button";
import { Loader2, Trash } from "lucide-react";
import React from "react";

import { useDeleteApplication } from "@/entities/application/model/use-applications";

interface DeleteApplicationButtonProps {
  applicationId: string;
}

const DeleteApplicationButton = ({
  applicationId,
}: DeleteApplicationButtonProps) => {
  const { mutate: deleteApplication, isPending } = useDeleteApplication();

  const handleDelete = () => {
    deleteApplication(applicationId);
  };

  return (
    <Button
      onClick={handleDelete}
      variant={"destructive"}
      className="w-8 h-8 cursor-pointer p-0"
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash className="h-4 w-4" />
      )}
    </Button>
  );
};

export default DeleteApplicationButton;
