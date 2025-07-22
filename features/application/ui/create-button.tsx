"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateApplicationDrawer from "./create-drawer";

const CreateApplicationButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CreateApplicationDrawer
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

export default CreateApplicationButton;
