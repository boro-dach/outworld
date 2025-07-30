"use client";
import { useArticlesQuery } from "@/entities/article/model/use-articles";
import JournalistArticle from "@/entities/article/ui/article-admin";
import { formatDate } from "@/shared/lib/date/date-formatter";
import React from "react";

type ArticleType = {
  id: string;
  text: string;
  title: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
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
          likes={article.likes}
          isLiked={article.isLiked}
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

export default JournalistArticlesList;
