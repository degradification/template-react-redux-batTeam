import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class BooksList extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        if (((this.props.bookData || {}).books || []).length) return;
        this.props.fetchAllBooks()
    }

    handleRemoveItem = data => {
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
                        <span data-item-id={props.original._id}>
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
                            {props.value}
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
                        <span data-pubYear={props.original.publication_year}>
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
                            {props.value || "unavailable"}
                        </span>
                    );
                }
            },
            {
            Header: 'COVER',
            accessor: 'mage_url_m',
            filterable: true,
            Cell: props => {
                return (
                    <span data-cover={props.original.image_url_m}>
                        {props.value}
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
                            Update Item
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
              (books || [].length >0)
            )? (
                  <ReactTable
                    data={books}
                    columns={columns}
                    isLoading={(loaded && loading)}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={10}
                  />
                ) :(

                'No Table to Render'

                )}
            </Wrapper>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      ...state,
      bookData: ownProps.match.params.id,

    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
