import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { BadgeCheck, BadgeX } from "lucide-react";
import React from "react";

interface VerificationBadgeProps {
  isVerified: boolean | undefined;
}

const VerificationBadge = ({ isVerified }: VerificationBadgeProps) => {
  return (
    <div>
      {isVerified ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <BadgeCheck className="text-zinc-400" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Ваш персонаж верифицирован, вы можете играть на сервере.</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <BadgeX className="text-zinc-400" />
          </TooltipTrigger>
          <TooltipContent className="max-w-2xs">
            <p>
              Ваш персонаж не верифицирован. Создайте заявку и дождитесь её
              подтверждения, чтобы играть на сервере.
            </p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default VerificationBadge;
