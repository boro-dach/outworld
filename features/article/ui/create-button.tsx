"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateArticleDrawer from "./create-drawer";

const CreateArticleButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CreateArticleDrawer
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

export default CreateArticleButton;
