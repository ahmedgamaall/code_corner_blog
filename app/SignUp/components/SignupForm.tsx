"use client";

import Dialog from "@/app/components/Dialog";
import FilledSubmitButton from "@/app/components/FilledSubmitButton";
import InputField from "@/app/components/InputField";
import LabelButton from "@/app/components/LabelButton";
import LoadingBlock from "@/app/components/LoadingBlock";
import { signUp } from "@/services/auth";
import { addUser } from "@/services/db";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AvatarImage from "./AvatarImage";

export default function SignupForm() {
  enum registerState {
    waiting,
    loading,
    done,
  }
  const router = useRouter();
  const [buttonState, setLoading] = useState(registerState.waiting);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    fullName: "",
    email: "",
    bio: "",
    password: "",
    imageUrl: "",
    jobTitle: "",
  });

  const onSubmit = async () => {
    setLoading(registerState.loading);
    try {
      const uid = await signUp(loanInputs.email, loanInputs.password);
      localStorage.setItem("uid", uid ?? "");
      await addUser(loanInputs, uid ?? "");
      setLoading(registerState.done);
      setShowModal(true);
      router.push("/signin");
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(registerState.waiting);
      setShowModal(true);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (loanInputs.imageUrl !== "") onSubmit();
      }}
      className="items-center justify-stretch flex flex-col gap-2 w-96"
    >
      <AvatarImage
        getImageUrl={(url: string) => {
          setLoanInputs({ ...loanInputs, imageUrl: url });
        }}
      />
      <InputField
        label="Full Name"
        type="text"
        value={loanInputs.fullName}
        placeholder="Enter your full name"
        onChange={(event) =>
          setLoanInputs({ ...loanInputs, fullName: event.target.value })
        }
      />
      <InputField
        label="Job title"
        value={loanInputs.jobTitle}
        type="job title"
        placeholder="Enter your job title"
        onChange={(event) =>
          setLoanInputs({ ...loanInputs, jobTitle: event.target.value })
        }
      />
      <InputField
        label="Bio"
        type="text"
        value={loanInputs.bio}
        placeholder="Enter your bio"
        onChange={(event) =>
          setLoanInputs({ ...loanInputs, bio: event.target.value })
        }
      />
      <InputField
        label="Email"
        value={loanInputs.email}
        placeholder="Enter your email address"
        type="email"
        onChange={(event) =>
          setLoanInputs({ ...loanInputs, email: event.target.value })
        }
      />
      <InputField
        label="Password"
        value={loanInputs.password}
        type="password"
        placeholder="Enter your password"
        onChange={(event) =>
          setLoanInputs({ ...loanInputs, password: event.target.value })
        }
      />

      <div className="pt-5">
        {buttonState === registerState.waiting ? (
          <FilledSubmitButton title="Register" />
        ) : buttonState === registerState.done ? (
          <LabelButton
            buttonTitle="Go to gmail"
            label="Validate you gmail and login"
            href="https://mail.google.com/mail/"
          />
        ) : (
          <LoadingBlock />
        )}
      </div>
      {errorMessage && <div className="pt-5 text-red-600">{errorMessage}</div>}
      <Dialog
        errorMessage={errorMessage}
        isVisible={showModal}
        successMessage="The Article Has Been Posted Successfully"
      />
    </form>
  );
}
