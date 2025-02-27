"use client";

import { uploadImage } from "@/services/storage";
import imageCompression from "browser-image-compression";
import Image from "next/image";
import { useRef, useState } from "react";

type AvatarImageProps = {
  getImageUrl: (url: string) => void;
};

export default function AvatarImage({ getImageUrl }: AvatarImageProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handelChangeImage = async (e: any) => {
    const input = e.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const options = {
        maxSizeMB: 0.1,
        // maxWidthOrHeight: 800,
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
    <div>
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
        className="rounded-full bg-slate-900"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        <Image
          className="block rounded-full shadow-xl mx-auto h-20 w-20 object-cover"
          src={imageUrl === "" ? "/user.png" : imageUrl}
          width={300}
          height={300}
          alt="user image"
        />
      </div>
    </div>
  );
}
