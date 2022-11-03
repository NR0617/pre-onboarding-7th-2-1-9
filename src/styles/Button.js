import { StyledButton } from './Theme';

export const Button = ({ children, size, fontWeight, onClick, value, ClassName }) => {
  return (
    <StyledButton
      size={size}
      fontWeight={fontWeight}
      onClick={onClick}
      value={value}
      ClassName={ClassName}
    >
      {children}
    </StyledButton>
  );
};
