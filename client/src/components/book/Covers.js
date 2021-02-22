import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import withData from './withData';

const cardContainer={
  backgroundColor:"rgba(229, 229, 229)",
  Width:"100%", marginTop:"24px", padding:"0px",
  color:"black", border:'none', maxHeight:'100vh',
  alignItems:'bottom',
}

const imageStyle ={
boxShadow:'0px 20px 40px -14px rgba(0, 0, 0, 0.7)',
height:'45vh',
}

const titleStyle = {
  color:'black', marginTop:'10px', padding:'2px',
  fontWeight:'700', fontSize:'1.13rem', marginLeft:'8px'
}

const detailStyle ={
  color:'rgba(90, 90, 90)', margin:'8px',
  padding:'2px', fontSize:'0.98rem',
  justifyContent:'space-between', lineHeight:'1.15',
  width:'100%', alignItems:'bottom'
}

const copiesBtn = {
  width:'15%', height:'50%', float:'right',
  margin:'0px', padding:'0px', border:'none',
  backgroundColor:'gray', display:'block',
}

const Covers = ({covers}) =>{
  return (
    <div className="container-fluid justifyContent-space-around d-flex row" style={cardContainer}>
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
          <div className="align-items-bottom text-left col-sm-4 col-md-3 col-lg-2 p-2" key={covers.isbn}>
          <Card.Img variant="top" style={imageStyle}
            src={coverImageUrlMedium} alt="Cover Image">
          </Card.Img>
          <Card.Title style={titleStyle}
            className="leftPad row"> {title}
          </Card.Title>
          <Card.Subtitle className="leftPad row" style={detailStyle} > {author} </Card.Subtitle>
          <Card.Text className="leftPad row" style={detailStyle}>ISBN: {isbn}
          </Card.Text>
          <Card.Text className="leftPad row" style={detailStyle}> {publication}
          <Button style={copiesBtn}> {copies}
          </Button>
          </Card.Text>
          <Button href={'/book/:id'}>Details</Button>
          </div>
        );
        })}
      </div>
    );
};

export default withData(Covers);
