import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Booklist from './Booklist';
import { getbooks } from '../redux/books/books';

const BookPage = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Booklist books={books} />

    </>
  );
};
export default BookPage;
