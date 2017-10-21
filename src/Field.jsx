import React from 'react';
import styled from 'styled-components';

export default class Field extends React.PureComponent {
  render() {
    const { name } = this.props;

    return (
      <Wrapper>
        <Label>{name}</Label>
        <Input {...this.props} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`display: flex;`;
const Label = styled.label`
  flex: 100px;
  margin-right: 5px;
`;
const Input = styled.input`
  width: 100%;
  flex: 100px;
`;
