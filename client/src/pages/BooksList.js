import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';
import axios from 'axios';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class BooksList extends Component {

    componentDidMount() {
        console.log("BooksList: props");
        console.log(this.props);
        // if (((this.props.bookData || {}).books || []).length) return;

        this.props.fetchAllBooks()
    }

    handleRemoveBook = data => {
        const bookId = data;

        this.props.deleteSingleBook(bookId)
            .then(resp => {
                console.log("handleRemoveBook: resp");
                console.log(resp);
                this.props.fetchAllBooks();
            });
    }

    render() {
        const {
            books,
            loaded,
            loading
        } = this.props.bookData || {};
        console.log(books);

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-book-id={props.original._id}>
                            {props.original._id}
                        </span>
                    )
                }
            },
            {
                Header: 'ISBN',
                accessor: 'isbn',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-isbn={props.original.isbn}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'TITLE',
                accessor: 'title',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-title={props.original.title}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'AUTHOR',
                accessor: 'author',
                Cell: props => {
                    return (
                        <span data-author={props.original.author}>
                            {props.value || "-"}
                        </span>
                    );
                },
            },
            {
                Header: 'PUBLICATION YEAR',
                accessor: 'publication_year',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-publication={props.original.publication_year}>
                            {props.value}
                        </span>
                    );
                },
            },
            {
                Header: 'COPIES',
                accessor: 'copies',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-copies={props.original.copies}>
                            {props.value}
                        </span>
                    );
                },
            },
            {
                Header: 'AVAILABLE',
                accessor: 'available',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-available={props.original.available}>
                            {props.value}
                        </span>
                    );
                },
            },
            {
                Header: 'Day(s)',
                accessor: 'daysOfWeek',
                filterable: true,
                Cell: props => {
                    const { daysOfWeek } = props.original;
                    let daysToDisplay = "";
                    if (daysOfWeek && typeof daysOfWeek === "object") {
                        for (const day in daysOfWeek) {
                            daysToDisplay = daysToDisplay === "" ? daysOfWeek[day] : `${daysToDisplay}, ${daysOfWeek[day]}`;
                        }

                    }
                    return (
                        <span
                            data-daysofweek={daysOfWeek && JSON.stringify(daysOfWeek)}
                            data-daysofweek-by-id={props.original._id}
                        >
                            {daysToDisplay || "-"}
                        </span>
                    );
                }
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <Link
                            data-update-id={props.original._id}
                            to={`/book/update/${props.original._id}`}
                        >
                            Update Book
                        </Link>
                    );
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <span data-delete-id={props.original._id}>
                            <DeleteButton
                                id={props.original._id}
                                onDelete={this.handleRemoveBook}
                            />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
                {(
                    (books || []).length < 0 // defeats the purpose of using `isLoading` prop?
                ) ? (
                        <ReactTable
                            data={books}
                            columns={columns}
                            isLoading={(loaded && loading)}
                            defaultPageSize={10}
                            showPageSizeOptions={true}
                            minRows={10}
                        />
                    ) : (
                        `No books to render... :(`
                    )}
            </Wrapper>
        );
    }

}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
