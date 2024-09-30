interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  publicationDate: string;
  coverImage: string;
  isEditable: boolean;
  email: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  borrowedBooks: string[];
}
interface AvailableBooksData {
  availble?: string;
  borrowed?: string;
}
interface Database {
  books: Book[];
  users: User[];
  availableBooksData: AvailableBooksData[];
}

const database: Database = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      synopsis:
        "A novel set in the 1920s that explores themes of wealth, excess, and the American dream.",
      publicationDate: "1925-04-10",
      coverImage: "https://example.com/gatsby.jpg",
      isEditable: false,
      email: "alice@example.com",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      synopsis:
        "A story of racial injustice and childhood innocence in the Deep South.",
      publicationDate: "1960-07-11",
      coverImage: "https://example.com/mockingbird.jpg",
      isEditable: true,
      email: "pm@gmail.com",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      synopsis:
        "A novel about a dystopian future where the government exercises total control over citizens.",
      publicationDate: "1949-06-08",
      coverImage: "https://example.com/1984.jpg",
      isEditable: false,
      email: "test@gmail.com",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      synopsis:
        "A classic novel about love and social standing in 19th century England.",
      publicationDate: "1813-01-28",
      coverImage: "https://example.com/pride.jpg",
      isEditable: true,
      email: "poojamande@gmail.com",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      synopsis:
        "A story about a young man's journey through New York City after being expelled from his prep school.",
      publicationDate: "1951-07-16",
      coverImage: "https://example.com/catcher.jpg",
      isEditable: false,
      email: "poojamande@gmail.com",
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      synopsis:
        "A fantasy adventure about a hobbit's journey to help a group of dwarves reclaim their homeland.",
      publicationDate: "1937-09-21",
      coverImage: "https://example.com/hobbit.jpg",
      isEditable: false,
      email: "poojamande@gmail.com",
    },
    {
      id: 7,
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure",
      synopsis:
        "The epic tale of Captain Ahab's obsessive quest to hunt down the white whale, Moby Dick.",
      publicationDate: "1851-10-18",
      coverImage: "https://example.com/moby-dick.jpg",
      isEditable: true,
      email: "poojamande@gmail.com",
    },
    {
      id: 8,
      title: "The Catch-22",
      author: "Joseph Heller",
      genre: "Satire",
      synopsis:
        "A satirical novel set during World War II that explores the absurdity of war and bureaucracy.",
      publicationDate: "1961-11-10",
      coverImage: "https://example.com/catch22.jpg",
      isEditable: false,
      email: "poojamande@gmail.com",
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian",
      synopsis:
        "A dystopian novel set in a future world where human beings are engineered and controlled.",
      publicationDate: "1932-08-31",
      coverImage: "https://example.com/brave-new-world.jpg",
      isEditable: false,
      email: "poojamande@gmail.com",
    },
    {
      id: 10,
      title: "The Road",
      author: "Cormac McCarthy",
      genre: "Post-Apocalyptic",
      synopsis:
        "A harrowing tale of a father and son traveling through a post-apocalyptic landscape.",
      publicationDate: "2006-09-26",
      coverImage: "https://example.com/road.jpg",
      isEditable: false,
      email: "alice@examp;le.com",
    },
  ],
  users: [
    {
      id: 1,
      name: "Pooja",
      email: "pooja@example.com",
      borrowedBooks: ["The Great Gatsby", "To Kill a Mockingbird"],
    },
    {
      id: 2,
      name: "Pooja Khochare",
      email: "pm@gmail.com",
      borrowedBooks: ["Brave New World", "Cormac McCarthy"],
    },
    {
      id: 2,
      name: "Test Name",
      email: "test@gmail.com",
      borrowedBooks: ["Brave New World", "To Kill a Mockingbird"],
    },
    {
      id: 4,
      name: "AK Mande",

      email: "poojamande@gmail.com",
      borrowedBooks: ["The Great Gatsby", "To Kill a Mockingbird"],
    },
    {
      id: 5,
      name: "John Doe",
      borrowedBooks: ["The Great Gatsby", "To Kill a Mockingbird"],
      email: "poojamande@gmail.com",
    },
    {
      id: 6,
      name: "John Doe",

      email: "Johnmande@gmail.com",
      borrowedBooks: ["To Kill a Mockingbird"],
    },
    {
      id: 7,
      name: "John hilter",
      email: "HiltyerJohnmande@gmail.com",
      borrowedBooks: ["The Great Gatsby"],
    },
    {
      id: 1,
      name: "Pooja",
      email: "pooja@example.com",
      borrowedBooks: ["The Great Gatsby", "To Kill a Mockingbird"],
    },
    {
      id: 2,
      name: "Pooja Khochare",
      email: "pm@gmail.com",
      borrowedBooks: ["Brave New World", "Cormac McCarthy"],
    },
    {
      id: 2,
      name: "Test Name",
      email: "test@gmail.com",
      borrowedBooks: ["Brave New World", "To Kill a Mockingbird"],
    },
  ],
  availableBooksData: [
    {
      availble: "25%",
    },
    { borrowed: "75%" },
  ],
};
export { database };
