/* eslint-disable semi */
import React from 'react';
import Logo from './Logo';


const PageLayout = ({children}) =>
    <div className="page-layout--header">
        <div className="page-layout--details">
        {children}
        </div>
    </div>

export default PageLayout;
