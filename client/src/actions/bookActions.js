import * as types from './actionTypes';
import api from '../api';

// TODO - make a utility for logging?

export const fetchAllBooks = () => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_ALL_BOOKS });

        return api.getAllBooks()
            .then(resp => {
                const { books } = resp.data;
                console.log("getAllBooks: resp");
                console.log(books);
                dispatch({
                    type: types.SET_ALL_BOOKS,
                    books,
                });
            })
            .catch(err => {
                console.error(`ERROR in 'getAllBooks': ${err}`);
                console.error(err);
                return err;
            });
    };
};

export const fetchSingleBook = (bookId) => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_BOOK });

        return api.getBookById(bookId)
            .then(resp => {
                console.log("getBookById: resp");
                console.log(resp);
                if (resp.data.success) {
                    const { book } = resp.data;
                    dispatch({
                        type: types.GET_SINGLE_BOOK,
                        book,
                    });
                }
                return resp;
            })
            .catch(err => {
                console.error(`ERROR in 'fetchSingleBook': ${err}`);
                console.error(err);
                return err;
            });
    };
};

export const insertSingleBook = book => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_BOOK });

        return api.insertBook(book)
            .then(resp => {
                console.log("insertBook: resp");
                console.log(resp);
                if ((resp.data || {}).success) {
                    const newBook = JSON.parse(resp.config.data);
                    dispatch({
                        type: types.SET_SINGLE_BOOK,
                        book: {
                            _id: resp.data.id,
                            ...newBook
                        }
                    });
                }
                return resp;
            })
            .catch(err => {
                console.error(`ERROR in 'insertSingleBook': ${err}`);
                console.error(err);
                return err;
            });
    };
};

export const updateSingleBook = book => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_BOOK });

        return api.updateBookById(book._id, book)
            .then(resp => {
                console.log("updateBook: resp");
                console.log(resp);
                if ((resp.data || {}).success) {
                    const newBook = JSON.parse(resp.config.data);
                    dispatch({
                        type: types.UPDATE_SINGLE_BOOK,
                        book: {
                            _id: resp.data.id,
                            ...newBook
                        }
                    });
                }
                return resp;
            })
            .catch(err => {
                console.error(`ERROR in 'updateSingleBook': ${err}`);
                console.error(err);
                return err;
            });
    };
};

export const deleteSingleBook = bookId => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_BOOK });

        return api.deleteBookById(bookId)
            .then(resp => {
                console.log("deleteBookById: resp");
                console.log(resp);
                dispatch({
                    type: types.RELOAD_BOOKS
                });
                return resp;
            })
            .catch(err => {
                console.error(`ERROR in 'deleteSingleBook': ${err}`);
                console.error(err);
                return err;
            });
    };
};
