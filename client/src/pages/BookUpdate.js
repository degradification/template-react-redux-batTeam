// eslint-disable-next-line 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleBook, updateSingleBook } from '../actions';
import { shared } from '../constants';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
    max-width: 30%;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
`;

const Fieldset = styled.fieldset.attrs({
    className: 'form-control',
})`
    border-color: transparent;
    margin: 1em auto 0.5em;
    max-width: 50%;
    min-height: 6em;
`;

const DayInput = styled.input.attrs({
    className: '',
})`
    margin: 5px auto;
    text-align: center;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
  margin: 15px 15px 15px 5px;
`;

class BookUpdate extends Component {
    constructor(props) {

        /**
         * Currently deprecated and now known as the "legacy context":
         * - https://reactjs.org/docs/legacy-context.html
         *
         * TODO: refactor to use new Context API:
         * - https://reactjs.org/docs/context.html
         */
        super(props);
        this.state = {
          _id:'',
          isbn:'',
          title: '',
          author: '',
          publication_year: '',
          copies: 0,
          image_url_m: '', /*image_url_m*/
          publisher:'',
          available:'',
        };
    }

    componentDidMount() {
        this.props.fetchSingleBook(this.props.bookId)
            .then(resp => {
                const { book } = resp.data;
                this.setState({ ...book });
            });
    }

    handleChangeInputIsbn = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value;
        this.setState({ author });
    }

    handleChangeInputPublication_year = async event => {
        const publication_year = event.target.value;
        this.setState({ publication_year });
    }

    handleChangeInputCopies = async event => {
        const copies = event.target.value;
        this.setState({ copies });
    }

    handleChangeInputImage_url_m = async event => {
        const image_url_m = event.target.value;
        this.setState({ image_url_m });
    }

    handleChangeInputPublisher = async event => {
        const publisher = event.target.value;
        this.setState({ publisher });
    }

    handleChangeInputAvailable = async event => {
        const available = event.target.validity.valid
            ? event.target.value
            : this.state.available;

        this.setState({ available });
    }

    handleUpdateBook = event => {
        const {
          _id,  isbn,  title, author, publication_year,
          copies, cover,  publisher, available,
        } = this.state;

        const book = { _id,  isbn,  title, author, publication_year,
        copies, cover,  publisher, available, };

        return this.props.updateSingleBook(book)
            .then(resp => {
                console.log("handleUpdateBook: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Book updated successfully');
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                window.alert(`There was an error updating the book... :(`);
                console.error("handleUpdateBook: err");
                console.error(err);
            });
    }

    confirmUpdateBook = event => {
        if (window.confirm(`Are you sure you want to update this book? ${this.state._id}`)) {
            return this.handleUpdateBook(event);
        }
    }

    render() {
        const {
          _id,  isbn,  title, author, publication_year,
          copies, image_url_m,  publisher, available
        } = this.state;

        return _id && (
            <Wrapper>
                <Title>Update A Book</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    value={isbn}
                    onChange={this.handleChangeInputIsbn}
                />

                <Label>TITLE: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>AUTHOR: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputTimeAuthor}
                />

                <Label>PUBLICATION YEAR: </Label>
                <InputText
                    type="text"
                    value={publication_year}
                    onChange={this.handleChangeInputPublication_year}
                />

                <Label>COPIES: </Label>
                <InputText
                  type="number"
                  step="0.1"
                  lang="en-US"
                  min="0"
                  max="1000"
                  pattern="[0-9]+([,\.][0-9]+)?"
                  value={copies}
                  onChange={this.handleChangeInputCopies}
                />

                <Label>COVER: </Label>
                <InputText
                  type="text"
                  value={image_url_m}
                  onChange={this.handleChangeInputImage_url_m}
                />

                <Label>PUBLISHER: </Label>
                <InputText
                  type="text"
                  value={publisher}
                  onChange={this.handleChangeInputPublisher}
                />

                <Label>AVAILABLE: </Label>
                <InputText
                  type="text"
                  value={available}
                  onChange={this.handleChangeInputAvailable}
                />

                <Button onClick={this.confirmUpdateBook}>Update Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        bookId: ownProps.match.params.id,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleBook, updateSingleBook }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookUpdate);
