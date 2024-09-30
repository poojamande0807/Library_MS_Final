import React, { useEffect, useState, useContext, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import {
  Box,
  Grid,
  Button,
  Text,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { database } from "../database/db";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  publicationDate: string;
  coverImage: string;
  isEditable: boolean;
  email?: string;
}

interface User {
  isAdmin: boolean;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [user, setUser] = useState<User>({ isAdmin: true });
  const navigate = useNavigate();

  useEffect(() => {
    // const fetchBooks = async () => {
    //   const querySnapshot = await getDocs(collection(db, "books"));
    //   setBooks(
    //     querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Book))
    //   );
    // };
    // fetchBooks();
    setBooks(database.books);

    const titleParam = searchParams.get("title") || "";
    const genreParam = searchParams.get("genre") || "";
    setSearchTerm(titleParam);
    setSelectedGenre(genreParam);
  }, [searchParams]);

  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchesTitle = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
      return matchesTitle && matchesGenre;
    });
    setFilteredBooks(filtered);
  }, [books, searchTerm, selectedGenre]);

  const handleSearch = useCallback(() => {
    setSearchParams({ title: searchTerm, genre: selectedGenre });
  }, [searchParams, searchTerm, selectedGenre]);

  return (
    <Box>
      <Box mb={4}>
        <br />
        <br />
        <Input
          variant="outline"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />{" "}
        <br />
        <br />
        <Select
          placeholder="Filter by genre -All"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          onBlur={handleSearch}
        >
          <option value="Fiction">Fiction</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Satire">Satire</option>
          <option value="Post-Apocalyptic">Post-Apocalyptic</option>
        </Select>
        <br />
        <br />
        <Button colorScheme="blue" onClick={handleSearch} ml={2}>
          Search
        </Button>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {filteredBooks.map((book) => (
          <Box
            key={book.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={book.coverImage} alt={book.title} />
            <Box p="6">
              <Text fontWeight="bold">{book.title}</Text>
              <Text>Author: {book.author}</Text>
              <Text>Genre: {book.genre}</Text>
              <Button
                style={{ margin: "5px" }}
                onClick={() => navigate(`/books/${book.id}`)}
              >
                Show More
              </Button>
              {user.isAdmin && (
                <Box>
                  <Button style={{ margin: "5px" }}>Edit</Button>
                  <Button style={{ margin: "5px" }}>Delete</Button>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Books;
