const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/V8cXuxa20RMVMiXVjcJZ/books';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const initialState = [];

const getBooksFromApi = async () => {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const books = await response.json();
  const booksData = Object.keys(books).map((id) => ({
    id,
    title: books[id][0].title,
    author: books[id][0].author,
  }));
  return booksData;
};

export const getbooks = () => (async (dispatch) => {
  const booksData = await getBooksFromApi();
  dispatch({
    type: GET_BOOKS,
    payload: booksData,
  });
});

const addBooksToApi = async (payload) => {
  const {
    id, title, author, category,
  } = payload;
  const send = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await send.text());
};

export const addbook = (payload) => (async (dispatch) => {
  const { id, title, author } = payload;
  await addBooksToApi(payload);
  dispatch({
    type: ADD_BOOK,
    book: { id, title, author },
  });
});

const removeBookFromApi = async (id) => {
  const remove = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await remove.text());
};

export const removeBook = (id) => (async (dispatch) => {
  await removeBookFromApi(id);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
