import { Badge } from "@/shared/ui/badge";
import React from "react";
import { ArticleCategory } from "../model/enums";
import { Cog, Globe, Rss, Server } from "lucide-react";

const ArticleBadge = ({ type }: { type: ArticleCategory }) => {
  return (
    <Badge
      className={
        type === ArticleCategory.WEBSITE
          ? "bg-blue-600"
          : type === ArticleCategory.SERVER
          ? "bg-green-600"
          : type === ArticleCategory.TECH
          ? "bg-red-600"
          : ""
      }
    >
      {type === ArticleCategory.WEBSITE ? (
        <div className="flex items-center gap-1">
          Сайт <Rss size={12} />
        </div>
      ) : type === ArticleCategory.SERVER ? (
        <div className="flex items-center gap-1">
          Сервер <Server size={12} />
        </div>
      ) : type === ArticleCategory.TECH ? (
        <div className="flex items-center gap-1">
          Тех. Часть <Cog size={12} />
        </div>
      ) : (
        "Другое"
      )}
    </Badge>
  );
};

export default ArticleBadge;
