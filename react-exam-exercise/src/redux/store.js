import { createStore } from "redux";

const initialState = {
  currentUser: null,
  books: [
    { id: 1, title: "Книга 1", status: "доступна" },
    { id: 2, title: "Книга 2", status: "доступна" },
    { id: 3, title: "Книга 3", status: "выдана" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        currentUser: null,
      };
    case "RETURN_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, status: "доступна" } : book
        ),
      };
    case "TAKE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, status: "выдана" } : book
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
