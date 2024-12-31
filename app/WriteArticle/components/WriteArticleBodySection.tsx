"use client";

import BorderedInputField from "@/app/components/BorderedInputField";
import { useState } from "react";
import FilledButton from "@/app/components/FilledButton";
import TextArea from "@/app/contactme/components/TextArea";
import ArticleImage from "./ArticleImage";

export default function WriteArticleBodySection() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loanInputs, setLoanInputs] = useState({
    email: "",
    fullName: "",
    headline: "",
    details: "",
  });

  const onSubmit = async () => {
    setLoading(true);
    // try {
    //   const user = await signUp(loanInputs.email, loanInputs.password);
    //   await addUser(loanInputs, user!.uid);
    //   setErrorMessage(
    //     "Account created successfully, Please Verify your email address"
    //   );
    //   setLoading(false);
    // } catch (error: any) {
    //   setErrorMessage(error.message);
    //   setLoading(false);
    // }
  };

  return (
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-40">
      <h3 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        Post Article
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
          value={loanInputs.fullName}
          placeholder="Enter article title"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, fullName: event.target.value })
          }
        />
        <div className="flex flex-row justify-between space-x-8 w-full">
          <BorderedInputField
            label="Choose Category"
            value={loanInputs.email}
            placeholder="Enter article "
            type="email"
            onChange={(event) =>
              setLoanInputs({ ...loanInputs, email: event.target.value })
            }
          />
          <BorderedInputField
            label="Choose Tags"
            type="text"
            value={loanInputs.headline}
            placeholder="Enter your headline"
            onChange={(event) =>
              setLoanInputs({ ...loanInputs, headline: event.target.value })
            }
          />
          <BorderedInputField
            label="Time to read"
            type="text"
            value={loanInputs.headline}
            placeholder="Enter your headline"
            onChange={(event) =>
              setLoanInputs({ ...loanInputs, headline: event.target.value })
            }
          />
        </div>
        <ArticleImage getImageUrl={(e) => {}} />
        <TextArea
          label="Content"
          type="text"
          lines={20}
          value={loanInputs.details}
          placeholder="Enter article content"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, details: event.target.value })
          }
        />
        <div className="pt-5">
          {!loading ? (
            <FilledButton title="Send" />
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
