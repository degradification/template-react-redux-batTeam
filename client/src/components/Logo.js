import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import coffee from '../styles/assets/icons.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``;

class Logo extends Component {
    render() {
        const { logoStyles } = this.props;

        return (
            <Wrapper href="https://localhost:3000">
                <img src={coffee} className="app--logo" style={logoStyles} alt="React Logo" />
           </Wrapper>
        );
    }
}

Logo.propTypes = {
    linkStyles: PropTypes.object,
    logoStyles: PropTypes.object,
};

export default Logo;
