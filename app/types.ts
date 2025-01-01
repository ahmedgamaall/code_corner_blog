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
  description: string;
  content: string;
  timeToRead: string;
  tags: Tag[];
  likes?: string[];
  category: Category;
  coverImage: string;
  createdAt?: Date;
  authorName: string;
  authorJobTitle: string;
  authorUid: string;
};

export type Tag = {
  tagDocId?: string;
  title: string;
};

export type Category = {
  categoryDocId?: string;
  title: string;
  description: string;
  logo: string;
};