import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BookDetails";
import { extendTheme, Theme, ThemeConfig } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import AdminDashboard from "./pages/AdminDashboard";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import React from "react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/Admin" element={<AdminDashboard />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/books" element={<Books />} />
              <Route path="*" element={<Books />} />
              <Route path="/books/:bookId" element={<BookDetails />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </Provider>
    </AuthProvider>
  );
};

export default App;
