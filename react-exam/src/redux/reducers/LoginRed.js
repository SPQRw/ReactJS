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
