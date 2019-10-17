import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImage from '../assets/icons/logo.svg';
import cameraImage from '../assets/icons/camera.svg';

function Header({ children }) {
  return (
    <div>
      <StyledHeader>
        <div className="content">
          <Link to="/">
            <img src={logoImage} alt="Logotipo do Instagram" />
          </Link>
          <Link to="/newpost">
            <img src={cameraImage} alt="Enviar Publicação" />
          </Link>
        </div>
      </StyledHeader>

      {children}
    </div>
  );
}

const StyledHeader = styled.header`
  background: #fff;
  height: 72px;
  border-bottom: 1px solid #ddd;

  .content {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    height: 72px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Header;
