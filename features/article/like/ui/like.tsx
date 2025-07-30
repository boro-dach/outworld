"use client";

import { Button } from "@/shared/ui/button";
import { Heart } from "lucide-react";
import React from "react";
import { useLikeArticle } from "../model/use-like"; // Импортируем наш хук
import { cn } from "@/lib/utils";

interface LikeProps {
  isLiked: boolean;
  articleId: string;
}

const Like = ({ isLiked, articleId }: LikeProps) => {
  const { mutate, isPending } = useLikeArticle();

  const handleLikeClick = () => {
    mutate({ articleId });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
        className="cursor-pointer"
        onClick={handleLikeClick}
        disabled={isPending}
      >
        <Heart
          size={16}
          className={cn("transition-all duration-200", {
            "fill-red-500 text-red-500": isLiked,
            "text-muted-foreground": !isLiked,
          })}
        />
      </Button>
    </div>
  );
};

export default Like;
