import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addbook, getbooks } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      title,
      author,
      category: '',
    };
    setTitle('');
    setAuthor('');
    dispatch(addbook(book));
    dispatch(getbooks());
  };

  return (
    <div className="form-enclosure">
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form className="form flex" onSubmit={handleSubmit}>
        <input
          className="book-title-input"
          name="title"
          value={title}
          type="text"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-title-input author"
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="chapter-btn addbook" type="submit">Add Book</button>
      </form>
    </div>

  );
};

export default Form;
