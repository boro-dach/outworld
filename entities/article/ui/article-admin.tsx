import Like from "@/features/article/like/ui/like";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { ArticleProps } from "../model/props";
import DeleteArticleButton from "@/features/article/ui/delete-button";
import ArticleBadge from "./badge";

const JournalistArticle = ({
  title,
  text,
  likes,
  id,
  type,
  isLiked,
}: ArticleProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <p className="text-xl font-bold">{title}</p>
          <ArticleBadge type={type} />
        </div>
        <DeleteArticleButton articleId={id} />
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
      <CardFooter className="flex flex-row items-center gap-2 justify-end">
        <Like articleId={id} isLiked={isLiked} />
        {likes}
      </CardFooter>
    </Card>
  );
};

export default JournalistArticle;
