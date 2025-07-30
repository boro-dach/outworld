import Like from "@/features/article/like/ui/like";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { ArticleProps } from "../model/props";
import DeleteArticleButton from "@/features/article/ui/delete-button";
<<<<<<< Updated upstream
<<<<<<< HEAD
import ArticleBadge from "./badge";
=======
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e
=======
import ArticleBadge from "./badge";
>>>>>>> Stashed changes

const JournalistArticle = ({
  title,
  text,
  likes,
  id,
<<<<<<< Updated upstream
<<<<<<< HEAD
  type,
=======
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e
=======
  type,
>>>>>>> Stashed changes
  isLiked,
}: ArticleProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
        <div className="flex flex-row items-center gap-2">
          <p className="text-xl font-bold">{title}</p>
          <ArticleBadge type={type} />
        </div>
<<<<<<< Updated upstream
=======
        <p className="text-xl font-bold">{title}</p>
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e
=======
>>>>>>> Stashed changes
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
