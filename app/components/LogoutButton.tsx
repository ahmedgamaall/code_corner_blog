"use client";

import { logOut } from "@/services/auth";
import FilledButton from "./FilledButton";

export default function LogoutButton() {
  return (
    <FilledButton
      title="Sign out"
      onClick={() => {
        logOut();
        localStorage.clear();
      }}
    ></FilledButton>
  );
}
