"use client";

import FilledButton from "@/app/components/FilledButton";
import InputField from "@/app/components/InputField";
import { signIn } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
const router = useRouter();
  const [loanInputs, setLoanInputs] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    setLoading(true);
    try {
      await signIn(loanInputs.email, loanInputs.password);
      setErrorMessage(
        "Done"
      );
      setLoading(false);
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(false);
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
        {!loading ? (
          <FilledButton title="Login" />
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
