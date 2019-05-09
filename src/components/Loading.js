import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 250px auto;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: #3498db;
  }
  &:before {
    z-index: 100;
    animation: spin 1s infinite;
  }
  &:after {
    border: 10px solid #ccc;
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default props => {
  return <LoaderContainer />;
};
