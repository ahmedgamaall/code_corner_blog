import { Article, Tag, UserInformation } from "@/app/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const addUser = async (formData: UserInformation, userUid: string) => {
  const collectionRef = collection(db, "users/");
  try {
    const doc = await addDoc(collectionRef, {
      userUid: userUid,
      fullName: formData.fullName,
      email: formData.email,
      bio: formData.bio,
      imageUrl: formData.imageUrl,
      jobTitle: formData.jobTitle,
    });
    return doc;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (
  formData: UserInformation,
  userUid: string
) => {
  const docRef = doc(db, "users", userUid);
  try {
    await updateDoc(docRef, {
      fullName: formData.fullName,
      bio: formData.bio,
      imageUrl: formData.imageUrl,
      jobTitle: formData.jobTitle,
    });
    return doc;
  } catch (error) {
    console.error(error);
  }
};

export const addArticle = async (article: Article, userUid: string) => {
  const collectionRef = collection(db, "articles/");
  try {
    const document = await addDoc(collectionRef, {
      title: article.title,
      description: article.description,
      content: article.content,
      timeToRead: article.timeToRead,
      tags: article.tags,
      likes: [],
      category: article.category,
      coverImage: article.coverImage,
      createdAt: Date.now(),
      authorName: article.authorName,
      authorJobTitle: article.authorJobTitle,
      authorUid: article.authorUid,
    });
    await updateDoc(doc(db, "articles", document.id), {
      articleDocId: document.id,
    });
    return document;
  } catch (error) {
    console.error(error);
  }
};

export const addTag = async (tag: Tag) => {
  const collectionRef = collection(db, "tags/");
  try {
    const document = await addDoc(collectionRef, {
      title: tag.title,
    });
    await updateDoc(doc(db, "tags", document.id), {
      tagDocId: document.id,
    });
    return document;
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticle = async (articleId: string) => {
  const docRef = doc(db, "posts", articleId);
  try {
    const result = await deleteDoc(docRef);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getArticles = async () => {
  const collectionRef = collection(db, "articles");
  try {
    const documents = await getDocs(collectionRef);
    const articles = documents.docs.map((doc) => { return doc.data()});
    return articles;
  } catch (error) {
    console.error(error);
  }
}

export const search = async (q: string) => {
  const collectionRef = collection(db, "articles");
  const searchResult = query(collectionRef, where("title", "==", q));
  try {
    const documents = await getDocs(searchResult);
    const articles = documents.docs.map((doc) => { return doc.data()});
    return articles;
  } catch (error) {
    console.error(error);
  }
};