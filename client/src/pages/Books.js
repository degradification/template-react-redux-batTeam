/* eslint-disable semi */
import React, { Component } from "react";
import Book from '../components/Book';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';

import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className: 'container1',
})`
    margin-left:auto;
    margin-right:auto;
    width:1600px;
    height:100%;
`;

const Container2 = styled.div.attrs({
    classname: 'bookdiv',
})`
    height:500px;
    width:400px;
    float:left;
`;

const BookDiv = styled.div.attrs({
    className: 'container2',
})`
    margin-left:auto;
    margin-right:auto;
    width:300px;
    height:470px;
    padding-top:40px;
    background-color:#EBEBEB;
`;

const Title = styled.div.attrs({
    className: 'title',
})`
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
    font-size:20px;
    font-family: Roboto;
    width:300px;
    height:130px;
    text-decoration:none;
`

const cardStyle={
  backgroundColor:"rgba(229, 229, 229)",
  width:"100%",
  margin:"0px", padding:"0px",
}


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/books/')
            .then(resp => {
                this.setState({ books: resp.bookData })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    BookList(){
        return this.state.books.map(book => {
            return <Book book = {book} key = {book._id}/>;
        })
    }

    render() {
        return (
            <Container>
                <h1><b>Available Books</b></h1>
                <br></br>
                <div>
                    {this.BookList()}
                </div>
            </Container>
        )
    }
}

export default Books;
