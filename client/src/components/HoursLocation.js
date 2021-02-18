import React from 'react';
import styled from 'styled-components';

import icons from '../styles/assets/icons.svg';

const hoursDescription = {
  borderTop:'1px solid black',
  fontSize:'1rem',
  textAlign:'center',
  marginBottom:'1rem',
  marginTop:'5px',
  fontFamily: 'Copperplate Gothic Light',
  paddingTop:'5px',
};

const locationDescription = {
  borderBottom:'1px solid black',
  fontSize:'1rem',
  textAlign:'center',
  marginBottom:'1rem',
  paddingBottom:'10px',
  fontFamily: 'Copperplate Gothic Light',
};

const HoursLocation = () =>
        <div className="page-layout--details">
            <p style={hoursDescription} > Mon-Thurs: 6am-10pm | Fri-Sat: 6am-Midnight | Sunday:10am-6pm </p>
            <p style={locationDescription} >
                1000 Commonwealth Books Ave., Boston, MA 02110 | (617) 200-1009
                <a href="https://www.google.com/maps?ll=42.357491,-71.057046&z=16&t=m&hl=en&gl=US&mapclient=apiv3"
                target="_blank" at="Book Cover" without rel="noopener noreferrer">
                <img src={icons} alt="Location Icon"></img></a>
            </p>
        </div>

export default HoursLocation;
