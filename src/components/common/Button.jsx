import { StyledButton } from './styles';

const Button = ({ text, onClick, value, isActive }) => {
  return (
    <StyledButton className={isActive && 'active'} value={value} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
