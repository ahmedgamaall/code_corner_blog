"use client";

import FilledButton from "@/app/components/FilledButton";
import InputField from "@/app/components/InputField";

export default function SignupForm() {
  return (
    <form className="items-center justify-stretch flex flex-col gap-6 w-96">
      <InputField
        placeholder="Full Name"
        onChange={(event) => console.log(event)}
      />
      <InputField
        placeholder="Bio"
        onChange={(event) => console.log(event)}
      />
      <InputField
        placeholder="Email"
        onChange={(event) => console.log(event)}
      />
      <InputField
        placeholder="Password"
        onChange={(event) => console.log(event)}
      />

      <div className="pt-5">
        <FilledButton title="Register" />
      </div>
    </form>
  );
}
