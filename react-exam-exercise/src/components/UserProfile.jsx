// UserProfile.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleReturnBook = (bookId) => {
    dispatch({ type: "RETURN_BOOK", payload: bookId });
  };

  const handleTakeBook = (bookId) => {
    dispatch({ type: "TAKE_BOOK", payload: bookId });
  };

  return (
    <div>
      <h2>
        Welcome, {currentUser.firstName} {currentUser.lastName}!
      </h2>
      <h3>Your Books:</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            [{book.status}] {book.title}
            {book.status === "доступна" ? (
              <button onClick={() => handleTakeBook(book.id)}>Take</button>
            ) : (
              <button onClick={() => handleReturnBook(book.id)}>Return</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
