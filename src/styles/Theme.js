import styled from 'styled-components';

export const Theme = {
  color: {
    black: '#000',
    gray: '#D9D9D9',
    blue: '#0094ff',
    white: '#fff',
  },

  text: {
    bold: '600',
    thin: '300',
    small: '12px',
    default: '14px',
    mid: '17px',
    big: '20px',
    extraBig: '24px',
    new: '신규',
  },
};

export const StyledButton = styled.button`
  width: 62px;
  height: 27px;
  border-radius: 62px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: ${props => props.fontWeight || Theme.text.bold};
  font-size: ${props => props.fontSize || Theme.text.mid};
  background-color: ${props =>
    props.ClassName === 'active' ? Theme.color.black : Theme.color.gray};
  color: ${props => (props.ClassName === 'active' ? Theme.color.white : Theme.color.black)};
`;

export const StyledText = styled.h3`
  color: ${props => props.color || Theme.color.black};
  font-weight: ${props => props.fontWeight || Theme.text.thin};
  font-size: ${props => props.fontSize || Theme.text.default};
`;

export const StyledImageBox = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export const StyledImageNew = styled.div`
  width: 52px;
  height: 22px;
  border-radius: 52px;
  background-color: ${Theme.color.blue};
  color: ${Theme.color.white};
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Theme.text.small};
  font-weight: ${Theme.text.bold};
`;
