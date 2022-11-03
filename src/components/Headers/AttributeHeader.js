import { AttributeBtnContainer, AttributeBtn } from './style';
import { AttributeBttons } from '../../constant/AttributeBttons';

const AttributeHeader = ({ setCheckedQuery }) => {
  const ButtonName = Object.keys(AttributeBttons);

  const test = event => {
    setCheckedQuery(event.target.value);
  };
  return (
    <AttributeBtnContainer>
      {ButtonName.map((el, idx) => {
        return (
          <AttributeBtn key={idx} onClick={test} value={AttributeBttons[el].value}>
            {AttributeBttons[el].name}
          </AttributeBtn>
        );
      })}
    </AttributeBtnContainer>
  );
};

export default AttributeHeader;
