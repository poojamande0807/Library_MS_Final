import { database } from "../database/db";

interface BookState {
  books: typeof database.books;
  borrowedBooks: Record<number, number>;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: BookState = {
  books: database.books,
  borrowedBooks: {},
};

const bookReducer = (state: BookState = initialState, action: Action): BookState => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, books: action.payload };

    case "BORROW_BOOK":
      return {
        ...state,
        borrowedBooks: {
          ...state.borrowedBooks,
          [action.payload.bookId]: action.payload.userId,
        },
      };

    case "RETURN_BOOK":
      const updatedBorrowedBooks = { ...state.borrowedBooks };
      delete updatedBorrowedBooks[action.payload.bookId];
      return { ...state, borrowedBooks: updatedBorrowedBooks };

    default:
      return state;
  }
};

export default bookReducer;
