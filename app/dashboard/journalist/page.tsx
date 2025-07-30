import CreateArticleButton from "@/features/article/ui/create-button";
import JournalistArticlesList from "@/widgets/articles/ui/list-admin";
import React from "react";

const Journalist = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-bold text-2xl">Новости:</h3>
        <CreateArticleButton />
      </div>
      <JournalistArticlesList />
    </div>
  );
};

export default Journalist;
