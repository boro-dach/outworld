import CreateBankcardButton from "@/features/bankcard/ui/create-button";
import SendToButton from "@/features/bankcard/ui/send-button";
import DepositButton from "@/features/transaction/ui/deposit-button";
import WithdrawButton from "@/features/transaction/ui/withdraw-button";
import CardsList from "@/widgets/bank/ui/list";
import TransactionsList from "@/widgets/transactions/ui/list";
import React from "react";

const Bank = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-bold text-2xl">Финансы</h3>
        <div className="flex flex-row items-center gap-2">
          <DepositButton />
          <WithdrawButton />
          <SendToButton />
          <CreateBankcardButton />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-1 w-full">
        <CardsList />
        <div className="md:col-span-3 md:flex md:flex-col md:items-center hidden w-full px-4">
          <TransactionsList />
        </div>
      </div>
    </div>
  );
};

export default Bank;
