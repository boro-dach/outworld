import { ArticleCategory } from "./enums";

export interface ArticleProps {
  title: string;
  text: string;
  likes: number;
  date: string;
  id: string;
  type: ArticleCategory;
  isLiked: boolean;
}
