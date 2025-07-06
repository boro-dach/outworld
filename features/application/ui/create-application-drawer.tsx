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
import CreateApplicationForm from "./create-application-form";
import { Button } from "@/shared/ui/button";

interface CreateApplicationDrawerProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const CreateApplicationDrawer = ({
  trigger,
  open,
  onOpenChange,
}: CreateApplicationDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-2xl">
            Создать заявку
          </DrawerTitle>
        </DrawerHeader>
        <div className="p-4 pb-0 flex flex-col items-center">
          <CreateApplicationForm onSuccess={() => onOpenChange?.(false)} />
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

export default CreateApplicationDrawer;
