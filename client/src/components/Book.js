/* eslint-disable semi */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Covers from './book/Covers';

const cardStyle = {
  backgroundColor:'transparent',
  border:'none', width:'100%',
  padding:'0', margin:'0'
}

const Book = () =>
<React.Fragment>
  <div className="container-fluid">
  <h1><b style={{float:'left'}}>Available Books</b></h1>
    <div className="w-100 d-flex" style={{backgroundColor:'rgba(229,229, 229)'}}>
      <Card className="card-block" style={cardStyle}>
        <Covers />
      </Card>
    </div>
  </div>
</React.Fragment>
export default Book;
