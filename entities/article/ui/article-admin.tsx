import Like from "@/features/article/like/ui/like";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { ArticleProps } from "../model/props";
import DeleteArticleButton from "@/features/article/ui/delete-button";
<<<<<<< HEAD
import ArticleBadge from "./badge";
=======
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e

const JournalistArticle = ({
  title,
  text,
  likes,
  id,
<<<<<<< HEAD
  type,
=======
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e
  isLiked,
}: ArticleProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
<<<<<<< HEAD
        <div className="flex flex-row items-center gap-2">
          <p className="text-xl font-bold">{title}</p>
          <ArticleBadge type={type} />
        </div>
=======
        <p className="text-xl font-bold">{title}</p>
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e
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
