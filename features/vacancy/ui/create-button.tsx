"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateVacancyDrawer from "./create-drawer";
import CreateVacancyForm from "./create-form"; // Импортируем форму

interface CreateVacancyButtonProps {
  companyId: string;
}

const CreateVacancyButton = ({ companyId }: CreateVacancyButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CreateVacancyDrawer
      open={open}
      onOpenChange={setOpen}
      title={`Новая вакансия`}
      trigger={
        <Button
          variant={"secondary"}
          className="w-8 h-8 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Plus />
        </Button>
      }
    >
      <CreateVacancyForm
        companyId={companyId}
        onSuccess={() => setOpen(false)}
      />
    </CreateVacancyDrawer>
  );
};

export default CreateVacancyButton;
