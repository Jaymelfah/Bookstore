import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './Booklist';
import Form from './Form';

const BookPage = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <Booklist books={books} />
      <Form />
    </>
  );
};
export default BookPage;
