import { useState, useContext } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const useAuth = () => {
  const [error, setError] = useState<string>("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error("Firebase: Error (auth/configuration-not-found)");
  }

  const { setUser } = authContext;

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return true;
    } catch (err: any) {
      setError(err.message);
      navigate("/books");
    }
  };

  return { login, error };
};

export default useAuth;
