"use client";

import BorderedInputField from "@/app/components/BorderedInputField";
import FilledButton from "@/app/components/FilledButton";
import TextArea from "@/app/contactme/components/TextArea";
import { Article } from "@/app/types";
import { onAuthStateChange } from "@/services/auth";
import { addArticle, getUser } from "@/services/db";
import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import ArticleImage from "./ArticleImage";
import SelectCategory from "./SelectCategory";
import TagsList from "./TagsList";

export default function WriteArticleBodySection() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const initTags: string[] = [];
  const [tagsList, setTagsList] = useState(initTags);

  const handleSelect = (event: any) => {
    const value: string = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setTagsList([...tagsList, value]);
    } else {
      const filteredList = tagsList.filter((item) => item != value);
      setTagsList(filteredList);
    }
  };

  const article: Article = {
    title: "",
    description: "",
    content: "",
    timeToRead: "",
    tags: tagsList,
    likes: [],
    category: "",
    createdAt: Date.now(),
    coverImage: "",
    authorName: "",
    authorJobTitle: "",
    authorUid: "",
  };
  const [formInputs, setFormInputs] = useState(article);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const user: User | null = await onAuthStateChange();
      const userInfo: DocumentData  = await getUser(user!.uid);
      setFormInputs({
        ...formInputs,
        authorName: userInfo.fullName,
        authorJobTitle: userInfo.jobTitle,
        authorUid: user!.uid,
      });
      const article = await addArticle(formInputs);

      setErrorMessage(
        "Account created successfully, Please Verify your email address"
      );
      setLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-40">
      <h3 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        Write Article
      </h3>
      <form
        className="items-center flex flex-col gap-2 w-full justify-stretch"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <BorderedInputField
          label="Title"
          type="text"
          value={formInputs.title}
          placeholder="Enter article title"
          onChange={(event) =>
            setFormInputs({ ...formInputs, title: event.target.value })
          }
        />
        <div className="flex flex-row justify-between space-x-8 w-full">
          <SelectCategory
            label="Choose Category"
            value={formInputs.category!}
            onChange={(event) =>
              setFormInputs({ ...formInputs, category: event.target.value })
            }
          />
          <BorderedInputField
            label="Time to read"
            type="text"
            value={formInputs.timeToRead}
            placeholder="Enter your headline"
            onChange={(event) =>
              setFormInputs({ ...formInputs, timeToRead: event.target.value })
            }
          />
        </div>
        <TagsList onChange={handleSelect} />
        <ArticleImage
          getImageUrl={(url) => {
            setFormInputs({
              ...formInputs,
              coverImage: url,
            });
          }}
        />
        <TextArea
          label="Content"
          type="text"
          lines={20}
          value={formInputs.content}
          placeholder="Enter article content"
          onChange={(event) =>
            setFormInputs({ ...formInputs, content: event.target.value })
          }
        />
        <div className="pt-5">
          {!loading ? (
            <FilledButton title="Post" />
          ) : (
            <div className="mx-auto h-20 w-20 object-cover bg-slate-600">
              Loading
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
