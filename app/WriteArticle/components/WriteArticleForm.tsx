"use client";

import BorderedInputField from "@/app/components/BorderedInputField";
import FilledSubmitButton from "@/app/components/FilledSubmitButton";
import TextArea from "@/app/components/TextArea";
import { Article } from "@/app/types";
import { addArticle, getUser } from "@/services/db";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import Dialog from "../../components/Dialog";
import LoadingBlock from "../../components/LoadingBlock";
import ArticleImage from "./ArticleImage";
import SelectCategory from "./SelectCategory";
import TagsList from "./TagsList";

type WriteArticleFormProps = {
  categories: any;
  tags: any;
};

export default function WriteArticleForm({
  categories,
  tags,
}: WriteArticleFormProps) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const article: Article = {
    title: "",
    content: "",
    timeToRead: "",
    tags: [],
    likes: [],
    category: "",
    createdAt: Timestamp.now(),
    coverImage: "",
    authorName: "",
    authorJobTitle: "",
    authorUid: "",
    authorImage: "",
  };
  const [formInputs, setFormInputs] = useState(article);

  const onSubmit = async () => {
    console.log(formInputs);
    setLoading(true);
    if (formInputs.category === "") {
      setFormInputs({
        ...formInputs,
        category: categories[0].title,
      });
    }
    if (formInputs.category === "") {
      setFormInputs({
        ...formInputs,
        category: categories[0].title,
      });
    }
    try {
      const uid = localStorage.getItem("uid");
      const userInfo: any = await getUser(uid ?? "");
      setFormInputs({
        ...formInputs,
        authorName: userInfo.fullName,
        authorJobTitle: userInfo.jobTitle,
        authorImage: userInfo.imageUrl,
        authorUid: uid ?? "",
      });
      const article = await addArticle(formInputs);
      setLoading(false);
      setShowModal(true);
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(false);
      setLoading(false);
    }
  };

  return (
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
          categories={categories}
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
          placeholder="Enter time to read"
          onChange={(event) =>
            setFormInputs({ ...formInputs, timeToRead: event.target.value })
          }
        />
      </div>
      <TagsList
        tags={tags}
        onChange={(tags) => {
          setFormInputs({
            ...formInputs,
            tags: tags,
          });
        }}
      />
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
      <div className="pt-5 pb-10">
        {!loading ? <FilledSubmitButton title="Post" /> : <LoadingBlock />}
      </div>
      <Dialog
        errorMessage={errorMessage}
        isVisible={showModal}
        successMessage="The Article Has Been Posted Successfully"
      />
    </form>
  );
}
