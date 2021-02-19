/* eslint-disable semi */
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/DropdownButton';
import Covers from './book/Covers';

const Book = () =>
<React.Fragment>
  <div className="container-fluid p-2">
    <div className="col d-flex">
      <Card border="none" className="card-block">
        <Covers />
      </Card>
    </div>
  </div>
</React.Fragment>
export default Book;
