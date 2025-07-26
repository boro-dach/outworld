"use client";

import { Button } from "@/shared/ui/button";
import { BanknoteArrowDown } from "lucide-react";
import { useState } from "react";
import WithdrawDrawer from "./withdraw-drawer";

const WithdrawButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <WithdrawDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant={"secondary"} className="w-8 h-8 cursor-pointer">
          <BanknoteArrowDown />
        </Button>
      }
    />
  );
};

export default WithdrawButton;
