"use client";

import FilledButton from "@/app/components/FilledButton";
import InputField from "@/app/components/InputField";
import LabelButton from "@/app/components/LabelButton";
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
      const user = await signUp(loanInputs.email, loanInputs.password);
      await addUser(loanInputs, user!.uid);
      setErrorMessage(
        "Account created successfully, Please Verify your email address"
      );
      setLoading(registerState.done);
      router.push("/signin");
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(registerState.waiting);
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
        value={loanInputs.password}
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
          <FilledButton title="Register" />
        ) : buttonState === registerState.done ? (
          <LabelButton
            buttonTitle="Go to gmail"
            label="Validate you gmail and login"
            href="https://mail.google.com/mail/"
          />
        ) : (
          <div className="mx-auto h-20 w-20 object-cover bg-slate-600">
            Loading
          </div>
        )}
      </div>
      {errorMessage && <div className="pt-5 text-red-600">{errorMessage}</div>}
    </form>
  );
}
