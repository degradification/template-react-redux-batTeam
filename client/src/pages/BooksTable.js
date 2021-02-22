import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';
import api from '../api'
import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class BooksList extends Component {

  constructor(props){
    super(props)
      this.state={
        books: [],
        column: [],
        loading:false,
      }
  }

    componentDidMount = async () => {
        this.setState({ loading:true})

        await api.getAllBooks().then(books => {
          this.setState({
            books: books.bookData,
            loading: false,
          })
        })
      }

    render() {
        const {
            books,
            loading
        } = this.state

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
                    )
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
                    )
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
                    )
                }
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
                    )
                }
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
                    )
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
                )
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
                    )
                }
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
                    )
                }
            },
        ]

        let showTable = true
        if(!books.length){
          showTable=false
        }

        return (
            <Wrapper>
            {showTable && (
                  <ReactTable
                    data={books}
                    columns={columns}
                    isLoading={(loading)}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={10}
                  />

                )}
            </Wrapper>
        )
    }

}
export default (BooksList)
