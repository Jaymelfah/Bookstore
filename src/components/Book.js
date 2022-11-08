import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getbooks, removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const handleClick = (id) => {
    dispatch(removeBook(id));
    dispatch(getbooks());
  };

  return (
    <div className="main-book-wrapper flex">
      <div className="book-wrapper flex">
        <ul className="list books">
          <li className="category">Action</li>
          <li className="book-title">{title}</li>
          <li className="book-author">{author}</li>
        </ul>
        <div className="book-buttons flex">
          <button className="btn" type="button">Comments</button>
          <button className="remove-button" onClick={() => handleClick(id)} type="button">Remove</button>
          <button className="btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-circle" />
        <div className="completion-status">
          <span>64%</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 3</p>
        <button className="chapter-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
}).isRequired;

export default Book;
