/* eslint-disable semi */
import React, { Component } from "react";
import ItemsTable from "./ItemsTable";
import ItemsInsert from "./ItemInsert";
import ItemsList from "./ItemsList";
import Book from '../components/Book';


class Books extends Component{
  render(){
    return (
    <React.Fragment>
    <h1>Placeholder Books Page</h1>
    <ItemsList BookList={this.props}/>
    </React.Fragment>

  )};

}


export default Books;
