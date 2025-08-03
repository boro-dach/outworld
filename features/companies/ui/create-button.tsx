"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateCompanyDrawer from "./create-drawer";

const CreateCompanyButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CreateCompanyDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant={"secondary"} className="w-8 h-8 cursor-pointer">
          <Plus />
        </Button>
      }
    />
  );
};

export default CreateCompanyButton;
