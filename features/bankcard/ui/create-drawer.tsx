import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import React from "react";
import { Button } from "@/shared/ui/button";
import CreateBankcardForm from "./create-form";

interface CreateBankcardDrawerProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const CreateBankcardDrawer = ({
  trigger,
  open,
  onOpenChange,
}: CreateBankcardDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-2xl">
            Создать банковскую карту
          </DrawerTitle>
        </DrawerHeader>
        <div className="p-4 pb-0 flex flex-col items-center">
          <CreateBankcardForm onSuccess={() => onOpenChange?.(false)} />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Отмена</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateBankcardDrawer;
