import PropTypes from 'prop-types';
import { Btn } from './Button.styled';
import { IconContext } from 'react-icons';
import { CgArrowsExchangeAltV } from 'react-icons/cg';

const Button = ({ onButtonChange }) => {
  return (
    <>
      <IconContext.Provider
        value={{
          color: '#36357e',
          size: '40px',
          className: 'global-class-name',
        }}
      >
        <Btn type="button" onClick={onButtonChange}>
          <CgArrowsExchangeAltV />
        </Btn>
      </IconContext.Provider>
    </>
  );
};

export default Button;

Button.propTypes = {
  onButtonChange: PropTypes.func.isRequired,
};
