"use client";

import BorderedInputField from "@/app/components/BorderedInputField";
import { useState } from "react";
import TextArea from "./TextArea";
import FilledButton from "@/app/components/FilledButton";

export default function ContactMeBody() {
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
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-80">
      <h3 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        Send Me Email
      </h3>

      <form
        className="items-center flex flex-col gap-2 w-full"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <BorderedInputField
          label="Your Name"
          type="text"
          value={loanInputs.fullName}
          placeholder="Enter your full name"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, fullName: event.target.value })
          }
        />
        <BorderedInputField
          label="Your Name"
          value={loanInputs.email}
          placeholder="Enter your email address"
          type="email"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, email: event.target.value })
          }
        />
        <BorderedInputField
          label="Headline"
          type="text"
          value={loanInputs.headline}
          placeholder="Enter your headline"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, headline: event.target.value })
          }
        />
        <TextArea
          label="Details about Query"
          type="text"
          value={loanInputs.details}
          placeholder="Enter your query"
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
