"use client";

import BorderedInputField from "@/app/components/BorderedInputField";
import FilledButton from "@/app/components/FilledButton";
import { useState } from "react";
import TextArea from "./TextArea";

export default function ContactMeBodySection() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loanInputs, setLoanInputs] = useState({
    email: "",
    fullName: "",
    details: "",
    headline:"",
  });

  return (
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-80">
      <h3 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        Send Me Email
      </h3>
      <form
        className="items-center flex flex-col gap-2 w-full"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="710f6419-b662-494f-bc9b-7f6f1e1af288"
        />
        <BorderedInputField
          label="Your Name"
          type="text"
          name="name"
          value={loanInputs.fullName}
          placeholder="Enter your full name"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, fullName: event.target.value })
          }
        />
        <BorderedInputField
          label="Your Email"
          value={loanInputs.email}
          name="email"
          placeholder="Enter your email address"
          type="email"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, email: event.target.value })
          }
        />
        <BorderedInputField
          label="Headline"
          type="text"
          name="subject"
          value={loanInputs.headline}
          placeholder="Enter your headline"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, headline: event.target.value })
          }
        />
        <TextArea
          label="Details about Query"
          type="text"
          name="message"
          lines={8}
          value={loanInputs.details}
          placeholder="Enter your query"
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, details: event.target.value })
          }
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
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
