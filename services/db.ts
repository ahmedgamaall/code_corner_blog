import { Article, UserInformation } from "@/app/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const addUser = async (formData: UserInformation, userUid: string) => {
  const collectionRef = collection(db, "users/");
  const docRef = doc(db, "users", userUid);
  try {
    const doc = await setDoc(docRef, {
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

export const getUser = async (uid: string) => {
  const collectionRef = collection(db, "users/");
  try {
    const document = await getDoc(doc(collectionRef, uid));
    return document.data();
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

export const addArticle = async (article: Article) => {
  const collectionRef = collection(db, "articles/");
  try {
    const document = await addDoc(collectionRef, {
      title: article.title,
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
    const articles = documents.docs.map((doc) => {
      return doc.data();
    });
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  const collectionRef = collection(db, "categories");
  try {
    const documents = await getDocs(collectionRef);
    const categories = documents.docs.map((doc) => {
      return doc.data();
    });
    return categories;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async (categoryDocId: string) => {
  const collectionRef = collection(db, "categories");
  try {
    const document = await getDoc(doc(collectionRef, categoryDocId));
    return document.data();
  } catch (error) {
    console.error(error);
  }
};

export const getTags = async () => {
  const collectionRef = collection(db, "tags");
  try {
    const documents = await getDocs(collectionRef);
    const tags = documents.docs.map((doc) => {
      return doc.data();
    });
    return tags;
  } catch (error) {
    console.error(error);
  }
};

export const search = async (q: string) => {
  const collectionRef = collection(db, "articles");
  try {
    const documents = await getDocs(collectionRef);
    const filteredResults = documents.docs.filter((doc) =>
      doc.data().title.toLowerCase().includes(q.toLowerCase())
    );
    return filteredResults;
  } catch (error) {
    console.error(error);
  }
};

export const getArticlesByTag = async (q: string) => {
  const collectionRef = collection(db, "articles");
  const searchResult = query(collectionRef, where("tag", "==", q));
  try {
    const documents = await getDocs(searchResult);
    const articles = documents.docs.map((doc) => {
      return doc.data();
    });
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getArticlesByCategory = async (q: any) => {
  const collectionRef = collection(db, "/articles");
  const searchResult = query(collectionRef, where("category", "==", q));
  try {
    const documents = await getDocs(searchResult);
    const articles = documents.docs.map((doc) => {
      return doc.data();
    });
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getArticleByDocId = async (articleId: string) => {
  const collectionRef = collection(db, "/articles");
  try {
    const document = await getDoc(doc(collectionRef, articleId));
    return document.data();
  } catch (error) {
    console.error(error);
  }
};
