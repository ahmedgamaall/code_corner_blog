"use client";

import { Category } from "@/app/types";
import { getCategories } from "@/services/db";
import { ChangeEvent } from "react";

type SelectCategoryProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export default async function SelectCategory({ label, value, onChange }: SelectCategoryProps) {
    const categories = await getCategories();

    const categoriesComponent = categories.map((category) => {
      return <option key={category.categoryDocId}>{category.title}</option>;
    });

  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        itemID={label}
        className="text-slate-800 text-xl font-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        itemID={label}
        value={value}
        required
        onChange={onChange}
        className="flex-1 rounded-md px-6 py-2 border"
        style={{ borderColor: "#172B4D", color: "#172B4D" }}
      >
        {categoriesComponent}
      </select>
    </div>
  );
}
