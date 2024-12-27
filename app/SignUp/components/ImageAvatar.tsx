"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import imageCompression from "browser-image-compression";

export default function ImageAvatar() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState("");

const handelChangeImage = async (e:any) => {
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
    } catch (error : any) {
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
          className="block rounded-full shadow-xl mx-auto h-32 w-32 object-cover"
          src={imageUrl === "" ? "/user.png" : imageUrl}
          width={300}
          height={300}
          alt="user image"
        />
      </div>
    </div>
  );
}
