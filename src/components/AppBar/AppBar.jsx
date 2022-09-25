import { Title, List, Nav, Header } from './AppBar.styled';
import PropTypes from 'prop-types';

import CurrencyItem from '../CurrencyItem';

const AppBar = ({ rates }) => {
  const curency = (rateA, rateB) => {
    return (rateA / rateB).toFixed(2);
  };

  return (
    <>
      <Header>
        <Title>Latest Currency</Title>
        <Nav>
          <List>
            <CurrencyItem name={'USD'} value={curency(rates.UAH, rates.USD)} />
            <CurrencyItem name={'EUR'} value={curency(rates.UAH, rates.EUR)} />
          </List>
        </Nav>
      </Header>
    </>
  );
};

export default AppBar;

AppBar.propTypes = {
  rates: PropTypes.exact({
    EUR: PropTypes.string,
    GBP: PropTypes.string,
    UAH: PropTypes.string,
    USD: PropTypes.string,
  }),
};
