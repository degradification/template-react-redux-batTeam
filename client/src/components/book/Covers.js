import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';

import withData from './withData';

const cardStyle={
  backgroundColor:"rgba(229, 229, 229)",
  width:"100%", margin:"0px", padding:"0px",
  color:"black",
}

const key = Math.random();

const Covers = ({covers}) =>{
  return (
    <div className="container-fluid row" style={cardStyle}>
      {covers.map((
        { coverImageUrlMedium,
          isbn,
          title,
          author,
          copies,
          publication,
          publisher,
          available
        }) => {
        return(
          <div className="text-left col-4 col-lg-2" key={covers.id}>

          <Card.Img variant="top" style={{ minHeight:"200px"}}
            src={coverImageUrlMedium} alt="Cover Image">
          </Card.Img>

          <Card.Title style={{ color:"black",height:"black", position:'absolut'}}
          className="leftPad"> {title} </Card.Title>
          <Card.Subtitle className="small leftPad"> {author} </Card.Subtitle>
          <Card.Text className="small leftPad"> {publication}</Card.Text>
          <Card.Text className="small leftPad"> {copies}</Card.Text>
          <Card.Text className="small leftPad">{isbn}</Card.Text>
          </div>
        );
        })}
      </div>
    );
};

export default withData(Covers);
