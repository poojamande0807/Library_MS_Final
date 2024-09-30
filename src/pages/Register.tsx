import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  Box,
  Input,
  Button,
  Checkbox,
  Text,
  background,
} from "@chakra-ui/react";
import { promises } from "dns";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleRegister = async (): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), { isAdmin });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="basicStyle">
      <Box>
        <Text fontSize="2xl">Register</Text>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox
          isChecked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        >
          Is Admin
        </Checkbox>
        <br />
        <Button colorScheme="blue" onClick={handleRegister}>
          Register
        </Button>
        {error && <Text color="red.500">{error}</Text>}
      </Box>
    </div>
  );
};

export default Register;
