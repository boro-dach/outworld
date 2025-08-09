import AcceptApplyButton from "@/features/apply/ui/accept-button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import Image from "next/image";
import React from "react";
import { ApplyStatusEnum } from "../model/enums";
import RejectApplyButton from "@/features/apply/ui/reject-button";

interface ApplyInterface {
  status: ApplyStatusEnum;
  applyId: string;
  login: string;
  coverLetter: string;
}

const CompanyApply = ({
  login,
  coverLetter,
  applyId,
  status,
}: ApplyInterface) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <Image
          width={32}
          height={32}
          className="rounded-sm"
          alt="Лицо оставившего отклик в Minecraft"
          src={`https://mc-heads.net/avatar/${login}/32`}
        />
        <p className="text-xl font-bold">{login}</p>
      </CardHeader>
      <CardContent>
        <p>
          {!coverLetter || coverLetter === ""
            ? "Без сопроводительного письма"
            : `Сопроводительное письмо: ${coverLetter}`}
        </p>
      </CardContent>
      <CardFooter>
        {status === ApplyStatusEnum.ACCEPTED ? (
          "Отклик принят"
        ) : status === ApplyStatusEnum.REJECTED ? (
          "Отклик отклонён"
        ) : (
          <div className="flex flex-row gap-2 items-center">
            <AcceptApplyButton applyId={applyId} />
            <RejectApplyButton applyId={applyId} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default CompanyApply;
