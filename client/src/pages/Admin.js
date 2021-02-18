import React, { Component } from "react";
import styled from 'styled-components';


const CheckoutBtn = styled.a.attrs({
    className: 'btn btn-lg',
})`
  margin: 25px 25px 25px 10px;
  width:80%;
  Background-Color: rgba(204,136,0, 0.3);
`;

const UpdateBtn = styled.a.attrs({
    className: 'btn btn-lg',
})`
  margin: 25px 25px 25px 10px;
  width:80%;
  Background-Color: rgba(204,136,0, 0.3);
`;

const AddBtn = styled.a.attrs({
    className: 'btn btn-lg',
})`
  margin: 25px 25px 25px 10px;
  width:80%;
  Background-Color: rgba(204,136,0, 0.3);
`;

const adminInfoTxt = {
  fontSize:'1.5rem',
  textAlign:'center',
  marginBottom:'1rem',
  fontFamily: 'Copperplate Gothic Light',
  marginTop:'50px',
};

const adminTitle = {
  borderBottom:'2px solid black',
  fontSize:'2rem',
  textAlign:'center',
  marginBottom:'1rem',
  fontFamily: 'Copperplate Gothic Light',
  marginTop:'25px',
};

const adminContainer={
  justifyContent:'flex-start',
  width:'100%',
  height:'auto',
  margin:'20px',
  textAlign:'left',
  fontFamily: 'Copperplate Gothic Light',
}

class Admin extends Component{
  render(){
    return (
      <>
      <div style={adminContainer}>
        <h1 style={adminTitle}>ADMINISTRATION</h1>
          <p style={adminInfoTxt}>
            Please Select One of the Following actions
          </p>
      </div>

        <AddBtn href={'/book/create'} block>Add A New Book</AddBtn>
        <UpdateBtn href={'/books'} block>Update An Existing Book</UpdateBtn>
        <CheckoutBtn href={'/books/list'} block>Checkout A Book</CheckoutBtn>
      </>
  )};
}

export default Admin;
