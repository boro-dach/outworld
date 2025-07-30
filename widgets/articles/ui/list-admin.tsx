"use client";
<<<<<<< HEAD:widgets/news/ui/list.tsx
<<<<<<< Updated upstream:widgets/news/ui/list.tsx
import { useNewsQuery } from "@/entities/new/model/use-news";
import New from "@/entities/new/ui/new";
=======
import { ArticleCategory } from "@/entities/article/model/enums";
import { useArticlesQuery } from "@/entities/article/model/use-articles";
import JournalistArticle from "@/entities/article/ui/article-admin";
>>>>>>> Stashed changes:widgets/articles/ui/list-admin.tsx
=======
import { useArticlesQuery } from "@/entities/article/model/use-articles";
import JournalistArticle from "@/entities/article/ui/article-admin";
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e:widgets/articles/ui/list-admin.tsx
import { formatDate } from "@/shared/lib/date/date-formatter";
import React from "react";

type ArticleType = {
  id: string;
  text: string;
  title: string;
  createdAt: string;
<<<<<<< HEAD:widgets/news/ui/list.tsx
<<<<<<< Updated upstream:widgets/news/ui/list.tsx
=======
  likes: number;
  isLiked: boolean;
  type: ArticleCategory;
>>>>>>> Stashed changes:widgets/articles/ui/list-admin.tsx
=======
  likes: number;
  isLiked: boolean;
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e:widgets/articles/ui/list-admin.tsx
};

const JournalistArticlesList = () => {
  const { data, isLoading, error } = useArticlesQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке новостей</div>;

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {data?.map((article: ArticleType) => (
        <JournalistArticle
          key={article.id}
          text={article.text}
          title={article.title}
          date={formatDate(article.createdAt)}
<<<<<<< HEAD:widgets/news/ui/list.tsx
<<<<<<< Updated upstream:widgets/news/ui/list.tsx
=======
          likes={article.likes}
          isLiked={article.isLiked}
          type={article.type}
          id={article.id}
>>>>>>> Stashed changes:widgets/articles/ui/list-admin.tsx
=======
          likes={article.likes}
          isLiked={article.isLiked}
          id={article.id}
>>>>>>> 4fc796df0ae0c2c70136086e8d73721bd7cfbf9e:widgets/articles/ui/list-admin.tsx
        />
      ))}
      {data?.length === 0 && (
        <div>
          <p>Новостей нет</p>
        </div>
      )}
    </div>
  );
};

export default JournalistArticlesList;
