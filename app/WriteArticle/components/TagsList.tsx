"use client";
import { ChangeEvent, useState } from "react";

type TagsListProps = {
  onChange: (tags:any) => void;
  tags:any;
};

export default function TagsList({ onChange, tags }: TagsListProps) {
    const initTags: string[] = [];
    const [tagsList, setTagsList] = useState(initTags);
  
    const handleSelect = (event: any) => {
      const value: string = event.target.value;
      console.log(value);
      const isChecked = event.target.checked;
      if (isChecked) {
        setTagsList([...tagsList, value]);
        onChange(tagsList);
      } else {
        const filteredList = tagsList.filter((item) => item != value);
        setTagsList(filteredList);
        onChange(tagsList);
      }
    };

  const tagsComponent = tags.map((tag:any) => {
    return (
      <div
        key={tag.title}
        className="flex flex-row space-x-1 bg-slate-300 p-2 rounded-md justify-center items-center"
      >
        <input
          id={tag.title}
          type="checkbox"
          value={tag.title}
          onChange={handleSelect}
          placeholder={tag.title}
          className="flex-1 rounded-md px-2 py-3 border"
          style={{ borderColor: "#172B4D", color: "#172B4D" }}
        />
        <label
          id={tag.title}
          className="text-slate-800 font-light"
          htmlFor={tag.title}
        >
          {tag.title}
        </label>
      </div>
    );
  });

  return (
    <div
      className="flex flex-col w-full space-y-6 text-slate-800 text-xl font-medium"
      style={{ color: "#172B4D" }}
    >
      Choose Tags
      <div className="flex flex-wrap gap-2 w-full space-x-0 mt-2">
        {tagsComponent}
      </div>
    </div>
  );
}
