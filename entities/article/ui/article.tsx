import Like from "@/features/article/like/ui/like";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { ArticleProps } from "../model/props";

const Article = ({ title, text, likes, id, isLiked }: ArticleProps) => {
  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-bold">{title}</p>
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

export default Article;
