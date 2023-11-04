import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeLT0VX-gCf6RfBv5G_BRDf9GP0YO4Ng8",
  authDomain: "usplash-for-lesson.firebaseapp.com",
  projectId: "usplash-for-lesson",
  storageBucket: "usplash-for-lesson.appspot.com",
  messagingSenderId: "561461651697",
  appId: "1:561461651697:web:da9188f59b0a1142352150",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider()
export const signUpLogin = async () => {
  return signInWithPopup(auth, provider)
  .then((result) => {
    return result
  })
  .catch((error) => {
    return error
  })
}
