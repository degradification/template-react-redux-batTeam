import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';

import WithData from './WithData';

const cardStyle={
  backgroundColor:"rgba(229, 229, 229)",
  width:"100%",
  margin:"0px", padding:"0px",
}


const Covers = ({covers}) =>{
  return (
    <div className="container-fluid row" style={cardStyle}>
      {covers.map((
          coverImageUrlMedium,
          isbn, title, author, copies, publication, publisher, available
        ) => {
        return(
          <div className="text-left col-4 col-lg-2">
          <Card.Img variant="top"
            style={{ minHeight:"200px"}}
            src={covers.coverImageUrlMedium}
            alt="Cover Image" key={covers.coverImageUrlMedium}>
          </Card.Img>
          <Card.Title className="leftPad" key={covers.title}> {covers} </Card.Title>
          <Card.Subtitle className="small leftPad" key={covers.author}> {covers} </Card.Subtitle>
          <Card.Text className="small leftPad" key={covers.publication_year}> {covers}</Card.Text>
          <Card.Text className="small leftPad" key={covers.copies}> {covers}</Card.Text>
          <Card.Text className="small leftPad" key={covers.isbn}>{covers}</Card.Text>
          </div>
        );
        })}
      </div>
    );
};

export default WithData(Covers);
