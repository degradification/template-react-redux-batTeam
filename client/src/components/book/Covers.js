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
  Width:"100%", marginTop:"24px", padding:"0px",
  color:"black", border:'none',
}

const titleStyle = {
  color:'black', marginTop:'10px', padding:'2px',
  fontWeight:'bold',
}

const detailStyle ={
  color:'rgba(84, 86, 88)', marginBottom:'8px',
  marginTop:'8px', padding:'2px', fontSize:'1.3rem',
  justifyContent:'space-around',
}

const spanStyle = {
  width:'50%', float:'right', marginBottom:'20px',
}
const Covers = ({covers}) =>{
  return (
    <div className="container-fluid justifyContent-space-around row" style={cardStyle}>
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
          <div className="text-left col-sm-12 col-4 col-lg-3 p-2" key={covers.isbn}>

          <Card.Img variant="top" style={{ minHeight:"200px"}}
            src={coverImageUrlMedium} alt="Cover Image">
          </Card.Img>
          <Card.Title style={titleStyle}
          className="leftPad"> {title} </Card.Title>
          <Card.Subtitle className="leftPad" style={detailStyle} > {author} </Card.Subtitle>
          <Card.Text className="leftPad" style={detailStyle}>ISBN: {isbn}</Card.Text>
          <Card.Text className="leftPad" style={detailStyle}> <span style={{width:'50%', float:'left'}}> {publication} </span><span style={spanStyle}> {copies}</span></Card.Text>
          <Button href={'/book/:id'}>Details</Button>
          </div>
        );
        })}
      </div>
    );
};

export default withData(Covers);
