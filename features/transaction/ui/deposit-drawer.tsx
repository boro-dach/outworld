import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import DepositForm from "./deposit-form";

interface DepositDrawerProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const SuccessView = ({ depositCode }: { depositCode: string }) => (
  <div className="flex flex-col items-center text-center gap-4">
    <h3 className="font-semibold text-lg">Заявка успешно создана!</h3>
    <p className="text-sm text-muted-foreground">
      Ваш уникальный код для пополнения:
    </p>
    <div className="bg-muted p-3 rounded-md w-full">
      <p className="text-2xl font-bold tracking-wider font-mono">
        {depositCode}
      </p>
    </div>
    <p className="font-bold mt-2">
      Продиктуйте этот код банкиру для завершения операции.
    </p>
  </div>
);

const DepositDrawer = ({ trigger, open, onOpenChange }: DepositDrawerProps) => {
  const [depositCode, setDepositCode] = useState<string | null>(null);

  const handleSuccess = (data: { depositCode: string }) => {
    setDepositCode(data.depositCode);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => {
        setDepositCode(null);
      }, 300);
    }
    onOpenChange?.(isOpen);
  };

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-2xl">Вклад АР</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 pb-0 flex flex-col items-center">
          {depositCode ? (
            <SuccessView depositCode={depositCode} />
          ) : (
            <DepositForm onSuccess={handleSuccess} />
          )}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">
              {depositCode ? "Готово" : "Отмена"}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DepositDrawer;
