"use client";

import { Button } from "@/shared/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";
import SendToDrawer from "./send-drawer";

const SendToButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SendToDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant={"secondary"} className="w-8 h-8 cursor-pointer">
          <Send />
        </Button>
      }
    />
  );
};

export default SendToButton;
