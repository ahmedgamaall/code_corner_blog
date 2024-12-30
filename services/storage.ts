import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const uploadImage = async (
  imageName: string,
  path: string,
  file: Blob | Uint8Array | ArrayBuffer
) => {
  let url = "";
  let progress;
  const storageRef = ref(storage, path + imageName);
  const metadata = {
    contentType: "image/jpeg",
  };

  try {
    const upload = await uploadBytes(storageRef, file);
    url = await getDownloadURL(upload.ref);
    console.log(url);
  } catch (error) {
    console.error(error);
  }
  console.log("storage" + url);
  return url;
};
