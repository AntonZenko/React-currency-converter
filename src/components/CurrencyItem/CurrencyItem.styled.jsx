import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #e6f5ff;
  margin: 0;
  padding: 5px;
`;

export const Value = styled.p`
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #e6f5ff;
  margin: 0;
`;
