"use server";

import { cookies } from "next/headers";

export async function create(uid: string) {
  const cookieStore = await cookies();
  cookieStore.set("uid", uid);
}
