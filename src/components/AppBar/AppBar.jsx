import { Header, Nav } from './AppBar.styled';
import { LinkStyled } from './AppBar.styled';

export const AppBar = ({ currencyList }) => {
  // console.log(currencyList);
  const headerCuurencyList = currencyList?.filter(
    item => item.ccy === 'USD' || item.ccy === 'EUR'
  );
  // console.log(headerCuurencyList);
  return (
    <>
      <Header>
        <Nav>
          <LinkStyled>Currency</LinkStyled>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
            }}
          >
            {headerCuurencyList &&
              headerCuurencyList.map(currency => (
                <li
                  key={currency.ccy}
                  style={{
                    marginRight: 20,
                  }}
                >
                  <span
                    style={{
                      marginRight: 20,
                    }}
                  >
                    {currency.ccy}{' '}
                  </span>
                  <span
                    style={{
                      marginRight: 20,
                    }}
                  >
                    Buy {currency.buy}
                  </span>
                  <span
                    style={{
                      marginRight: 20,
                    }}
                  >
                    Sale {currency.sale}
                  </span>
                </li>
              ))}
          </ul>
        </Nav>
      </Header>
    </>
  );
};
