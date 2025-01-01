import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    sendEmailVerification(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if(userCredential.user.emailVerified === false){
      await logOut();
      throw "Please verify your email address";
    }
    return userCredential.user;
  } catch (error) {
    return error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export const onAuthStateChange = () => {
  onAuthStateChanged(auth, (user) => {
    return user;
  });
  return null;
};
