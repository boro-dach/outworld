"use client";

import { Button } from "@/shared/ui/button";
import { Loader2, Trash } from "lucide-react";
import React from "react";

import { useDeleteArticle } from "@/entities/article/model/use-articles";

interface DeleteArticleButtonProps {
  articleId: string;
}

const DeleteArticleButton = ({ articleId }: DeleteArticleButtonProps) => {
  const { mutate: deleteArticle, isPending } = useDeleteArticle();

  const handleDelete = () => {
    deleteArticle(articleId);
  };

  return (
    <Button
      onClick={handleDelete}
      variant={"destructive"}
      className="w-8 h-8 cursor-pointer p-0"
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash className="h-4 w-4" />
      )}
    </Button>
  );
};

export default DeleteArticleButton;
