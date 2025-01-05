import { Timestamp } from "firebase/firestore";

export type UserInformation = {
  fullName: string;
  email: string;
  bio: string;
  password: string;
  imageUrl: string;
  jobTitle: string;
};

export type Article = {
  articleDocId?: string;
  title: string;
  content: string;
  timeToRead: string;
  tags?: string[];
  likes?: string[];
  category?: string;
  coverImage: string;
  createdAt?: Timestamp;
  authorName: string;
  authorImage: string;
  authorJobTitle: string;
  authorUid: string;
};

export type Category = {
  categoryDocId?: string;
  title: string;
  description: string;
  logo: string;
};

export enum NavSelect {
  home,
  categories,
  profile,
  search,
  contactMe,
  aboutMe,
}

export enum ArticleCardEnum {
  home,
  categories,
  search,
}
