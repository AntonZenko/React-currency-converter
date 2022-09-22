import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Nav = styled.nav`
  display: flex;
`;

export const LinkStyled = styled.span`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #303030;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
