import React, {useContext} from 'react';

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


const Covers = () =>{

  const {covers} = useContext(WithData);

  if (!covers.length){
    return <h1>No Books Available </h1>
  }

  return (
    <div className="container-fluid row" style={cardStyle}>
      {covers.map(({image: image,
          isbn, title, author, copies, publication, publisher, available
        }) => (
          <div className="text-left col-4 col-lg-2">
          <Card.Img variant="top"
            style={{ minHeight:"200px"}}
            src={image} alt="Cover Image" key={image}>
          </Card.Img>
          <Card.Title className="leftPad" key={title}> {title} </Card.Title>
          <Card.Subtitle className="small leftPad" keys={author}> {author} </Card.Subtitle>
          <Card.Text className="small leftPad" key={publication}> {publication} </Card.Text>
          <Card.Text className="small leftPad" key={copies}> {copies} </Card.Text>
          <Card.Text className="small leftPad" key={isbn}> {isbn} </Card.Text>
          </div>
        ))}
      </div>
)
}

export default Covers;
