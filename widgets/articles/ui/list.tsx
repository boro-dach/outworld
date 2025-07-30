"use client";
import { ArticleCategory } from "@/entities/article/model/enums";
import { useArticlesQuery } from "@/entities/article/model/use-articles";
import Article from "@/entities/article/ui/article";
import { formatDate } from "@/shared/lib/date/date-formatter";
import React from "react";

type ArticleType = {
  id: string;
  text: string;
  title: string;
  createdAt: string;
  likes: number;
  type: ArticleCategory;
  isLiked: boolean;
};

const ArticlesList = () => {
  const { data, isLoading, error } = useArticlesQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке новостей</div>;

  return (
    <div className="w-full py-4 flex flex-col gap-4">
      {data?.map((article: ArticleType) => (
        <Article
          key={article.id}
          text={article.text}
          title={article.title}
          date={formatDate(article.createdAt)}
          likes={article.likes}
          isLiked={article.isLiked}
          type={article.type}
          id={article.id}
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

export default ArticlesList;
