import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 20%;
  display: inline-block;
  margin: 10px;
  padding: 10px;
`;

const Title = styled.h2`
  display: block;
  text-align: center;
`;

const Temperature = styled.strong`
  display: block;
  text-align: center;
`;

export default props => {
  return (
    <Wrapper>
      <Title>{props.name}</Title>
      <Temperature>{props.temp} ºC</Temperature>
    </Wrapper>
  );
};
