import { UserInformation } from "@/app/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const addUser = async (formData: UserInformation, userUid: string) => {
  const collectionRef = collection(db, `users/`);
  
  // collectionRef.doc(userUid);
  try {
    const doc = await addDoc(collectionRef, {
      userUid: userUid,
      fullName: formData.fullName,
      email: formData.email,
      bio: formData.bio,
      imageUrl: formData.imageUrl,
    });
    return doc;
  } catch (error) {
    console.error(error);
  }
};

// const getRandomTimestamp = () => {
// 	const startTimestamp = new Date('2024-01-01').getTime()
// 	const endTimestamp = new Date().getTime()
// 	const randomTimestamp = Math.floor(
// 		Math.random() * (endTimestamp - startTimestamp + 1) + startTimestamp,
// 	)
// 	const randomDate = new Date(randomTimestamp)

// 	return Timestamp.fromDate(randomDate)
// }

// const addMultiplePosts = async () => {
// 	const batch = writeBatch(db)

// 	const user1Ref = doc(db, 'users', 'BuIYJce615lrfcdfpo9i')
// 	const user2Ref = doc(db, 'users', '7F9HiUVFDzWXtGC0r1Nd')

// 	const users = [user1Ref, user2Ref]
// 	const getRandomUser = () => users[Math.floor(Math.random() * users.length)]

// 	posts.forEach((post) => {
// 		const postData = {
// 			...post,
// 			user: getRandomUser(),
// 			createdAt: getRandomTimestamp(),
// 		}

// 		const docRef = doc(collection(db, 'posts'))
// 		batch.set(docRef, postData)
// 	})

// 	await batch.commit()
// }

// const updatePost = async (postId : string, formData) => {
// 	const docRef = doc(db, 'posts', postId)

// 	await updateDoc(docRef, {
// 		title: formData.get('title'),
// 		content: deleteField(),
// 		// content: formData.get('content'),
// 		tags: formData
// 			.get('tags')
// 			.split(',')
// 			.map((tag:string) => tag.trim()),
// 		// tags: arrayUnion('new-tag'),
// 		// tags: arrayRemove('new-tag'),
// 	})

// 	revalidatePath(`/post/${postId}`)
// }

// const deletePost = async (postId:string) => {
// 	const docRef = doc(db, 'posts', postId)
// 	await deleteDoc(docRef)
// 	redirect('/')
// }

// export { addPost, addMultiplePosts, updatePost, deletePost }
