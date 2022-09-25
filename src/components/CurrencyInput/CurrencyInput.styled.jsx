import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 30px auto;
  width: 100%;
`;

export const Input = styled.input`
  width: 70%;
  height: 30px;
  border: 1px solid #8281ca;
  border-radius: 3px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 500;
  color: #36357e;
  margin-right: 10px;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border: 2px solid #36357e;
  }
`;

export const Select = styled.select`
  width: 30%;
  height: 30px;
  border: 1px solid #8281ca;
  border-radius: 3px;
  padding: 0 10px;
  font-weight: 500;
  color: #36357e;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border: 2px solid #36357e;
  }
`;
export const Option = styled.option`
  font-weight: 500;
  // color: #36357e;
`;
