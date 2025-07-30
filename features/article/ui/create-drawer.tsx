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
import CreateApplicationForm from "./create-form";
import { Button } from "@/shared/ui/button";

interface CreateArticleDrawerProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const CreateArticleDrawer = ({
  trigger,
  open,
  onOpenChange,
}: CreateArticleDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-2xl">
            Создать новость
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

export default CreateArticleDrawer;
