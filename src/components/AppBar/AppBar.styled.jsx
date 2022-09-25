import styled from 'styled-components';

export const Header = styled.header`
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #4d4bb4;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #e6f5ff;
  margin-right: 30px;
  @media screen and (max-width: 480px) {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  // display: flex;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
