import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      dispatch(signInStart());
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          googlePhotoUrl: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        dispatch(signInFailure(data.message));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <Button
      type="button"
      className="bg-gradient-to-t from-violet-600 to-rose-600 flex justify-center items-center place-items-center text-md"
      outline
      onClick={handleGoogleClick}
    >
      <FaGoogle className="w-5 h-5 mr-2" /> Continue with Google
    </Button>
  );
}

export default OAuth;
