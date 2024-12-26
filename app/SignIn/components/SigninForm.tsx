"use client";

import FilledButton from "@/app/components/FilledButton";
import InputField from "@/app/components/InputField";

export default function SigninForm() {
  return (
    <form className="items-center justify-stretch flex flex-col gap-6 w-96">
      <InputField
        placeholder="Email"
        onChange={(event) => console.log(event)}
      />
      <InputField
        placeholder="Password"
        onChange={(event) => console.log(event)}
      />

      <div className="pt-5">
        <FilledButton title="Login"></FilledButton>
      </div>
    </form>
  );
}
