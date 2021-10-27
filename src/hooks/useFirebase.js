import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    })
    .finally(()=>setIsLoading(false));
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(result=>{})
    .finally(()=> setIsLoading(false)); 
  };
  return {
    user,
    isLoading,
    googleSignIn,
    logOut,
    
  };
};
export default useFirebase;
