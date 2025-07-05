"use client";
import { useNewsQuery } from "@/entities/new/model/use-news";
import New from "@/entities/new/ui/new";
import { formatDate } from "@/shared/lib/date/date-formatter";
import React from "react";

type NewType = {
  id: string;
  text: string;
  title: string;
  createdAt: string;
};

const NewsList = () => {
  const { data, isLoading, error } = useNewsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке новостей</div>;

  return (
    <div className="w-full py-4">
      {data?.map((article: NewType) => (
        <New
          key={article.id}
          text={article.text}
          title={article.title}
          date={formatDate(article.createdAt)}
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

export default NewsList;
