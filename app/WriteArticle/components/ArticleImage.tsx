"use client";

import { uploadImage } from "@/services/storage";
import imageCompression from "browser-image-compression";
import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react";

type ArticleImageProps = {
  getImageUrl: (url: string) => void;
};

export default function ArticleImage({ getImageUrl }: ArticleImageProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handelChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
      try {
        const compressImage = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrlCompress = reader.result;
          setImageUrl(imageUrlCompress as string);
        };
        reader.readAsDataURL(compressImage);
        const url = await uploadImage(file.name, "users/", compressImage);
        getImageUrl(url);
        setUploadedImageUrl(url);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };
  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        readOnly
        className="hidden"
        id="input"
        onChange={handelChangeImage}
      />
      <div
        className="container my-4 rounded-md bg-slate-900 w-full h-2/3 border-2 items-center"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        {imageUrl === "" ? (
          <div className="p-40 w-full text-center">Upload Article Image</div>
        ) : (
          <Image
            className="rounded-md shadow-xl h-96 w-full border border-slate-700"
            src={imageUrl}
            width={400}
            height={200}
            alt="article image"
          />
        )}
      </div>
    </div>
  );
}
