"use client";

import { Button } from "@/shared/ui/button";
import { BanknoteArrowUp } from "lucide-react";
import { useState } from "react";
import DepositDrawer from "./deposit-drawer";

const DepositButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DepositDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant={"secondary"} className="w-8 h-8 cursor-pointer">
          <BanknoteArrowUp />
        </Button>
      }
    />
  );
};

export default DepositButton;
