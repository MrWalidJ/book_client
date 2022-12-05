import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";

const Books = () => {
  const [books, setBooks] = useState([]);
  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => {
      setBooks(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchHandler();
  }, []);
  //console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
