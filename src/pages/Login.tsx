import React, { useState, ChangeEvent } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();

  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigate("/books");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Card>
      <CardBody>
        <Box>
          <Text fontSize="2xl">Login</Text>
          <Input
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button colorScheme="teal" variant="solid" onClick={handleLogin}>
            Login
          </Button>
          {error && <Text color="red.500">{error}</Text>}
        </Box>
      </CardBody>
    </Card>
  );
};

export default Login;
