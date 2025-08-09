"use client";

import { Button } from "@/shared/ui/button";
import React, { useState } from "react";
import CreateApplyForm from "./apply-form";
import CreateApplyDrawer from "./apply-drawer";

interface CreateApplyButtonProps {
  vacancyId: string;
}

const CreateApplyButton = ({ vacancyId }: CreateApplyButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CreateApplyDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button className="h-8 cursor-pointer" onClick={() => setOpen(true)}>
          <p>Откликнуться</p>
        </Button>
      }
    >
      {open && vacancyId && (
        <CreateApplyForm
          vacancyId={vacancyId}
          onSuccess={() => setOpen(false)}
        />
      )}
    </CreateApplyDrawer>
  );
};

export default CreateApplyButton;
