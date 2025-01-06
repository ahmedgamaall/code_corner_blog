"use client";

import Dialog from "@/app/components/Dialog";
import FilledSubmitButton from "@/app/components/FilledSubmitButton";
import InputField from "@/app/components/InputField";
import LoadingBlock from "@/app/components/LoadingBlock";
import { signIn } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const [loanInputs, setLoanInputs] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    setLoading(true);
    try {
      const uid = await signIn(loanInputs.email, loanInputs.password);
      // localStorage.setItem("uid", uid ?? "");
      setLoading(false);
      setShowModal(true);
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="items-center justify-stretch flex flex-col gap-2 w-96"
    >
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
        {!loading ? <FilledSubmitButton title="Login" /> : <LoadingBlock />}
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
