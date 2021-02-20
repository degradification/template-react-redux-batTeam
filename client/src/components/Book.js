/* eslint-disable semi */
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';
import Covers from './book/Covers';

const cardStyle = {
  backgroundColor:'transparent',
  border:'none'
}

const Book = () =>
<React.Fragment>
  <div className="container-fluid p-4">
  <h1><b style={{float:'left'}}>Available Books</b></h1>
    <div className="col d-flex" style={{backgroundColor:'rgba(229,229, 229)'}}>
      <Card className="card-block" style={cardStyle}>
        <Covers />
      </Card>
    </div>
  </div>
</React.Fragment>
export default Book;
