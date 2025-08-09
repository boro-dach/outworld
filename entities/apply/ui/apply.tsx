import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import Image from "next/image";
import React from "react";

interface ApplyInterface {
  login: string;
  coverLetter: string;
}

const Apply = ({ login, coverLetter }: ApplyInterface) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <Image
          width={32}
          height={32}
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
    </Card>
  );
};

export default Apply;
