import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleBook } from '../actions';
import { shared } from '../constants';

import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
    width:100%;
    display:block;
`;

const Title = styled.span.attrs({
    className: 'h1 ',
})`
      margin-top: 5px;
      display:block;
      Border-Bottom:2px solid black;
      text-align:center;
      margin-bottom:1rem;
      margin-top:25px;

`;

const Label = styled.label.attrs({
    className:'p',
})`
    margin: 5px auto;
    max-width: 30%;
    position:relative;
    text-align: left;
    justifyContent:space-around;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 100%;
    }
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 70%;
    position:relative;
    text-align: left;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
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

class BookInsert extends Component {
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
        const copies = event.target.validity.valid
            ? event.target.value
            : this.state.copies;

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
        const available = event.target.value;
        this.setState({ available });
    }

    handleInsertBook = event => {
        event.preventDefault();

        const {
          isbn,
          title,
          author,
          publication_year,
          copies,
          image_url_m,
          publisher,
          available
        } = this.state;

        const book = {
        isbn,
        title,
        author,
        publication_year,
        copies,
        image_url_m,
        publisher,
        available
      };

        this.props.insertSingleBook(book)
            .then(resp => {
                console.log("handleInsertBook: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Book inserted successfully');
                    this.setState({
                      isbn:'',
                      title: '',
                      author: '',
                      publication_year: '',
                      copies: 0,
                      cover: '',
                    });
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                // TODO: pass error object correctly so that things like validation errors can be displayed to user
                window.alert(`There was an error creating the book... :(`);
                console.log("handleInsertBook: err");
                console.log(err);
            })
    }

    render() {
        const {
          isbn,
          title,
          author,
          publication_year,
          copies,
          image_url_m,
          publisher,
          available,
        } = this.state;

        return (
            <Wrapper>
                <Title>Add A Book</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    value={isbn}
                    onChange={this.props.handleChangeInputIsbn}
                />

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.props.handleChangeInputTitle}
                />

                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.props.handleChangeInputAuthor}
                />

                <Label>Publication Year: </Label>
                <InputText
                    type="text"
                    value={publication_year}
                    onChange={this.props.handleChangeInputPublication_year}
                />

                <Label>Copies </Label>
                <InputText
                type="number"
                step="1"
                lang="en-US"
                min="0"
                pattern="[0-9]+([,\.][0-9]+)?"
                    onChange={this.props.handleChangeInputCopies}
                />

                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    value={publisher}
                    onChange={this.props.handleChangeInputPublisher}
                />

                <Label>Available </Label>
                <InputText
                type="number"
                step="1"
                lang="en-US"
                min="0"
                pattern="[0-9]+([,\.][0-9]+)?"
                    onChange={this.props.handleChangeInputAvailable}
                />

                <Label>Cover: </Label>
                  <InputText
                    type="file"
                    value={image_url_m}
                    onChange={this.props.handleChangeInputImage_url_m}
                />

                <Button onClick={this.handleInsertBook}>Add Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleBook }, dispatch);

export default connect(null, mapDispatchToProps)(BookInsert);
