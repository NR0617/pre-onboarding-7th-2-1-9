import { StyledText } from './Theme';

export const Text = ({ fontWeight, fontSize, text, color }) => {
  return (
    <StyledText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      {text}
    </StyledText>
  );
};
