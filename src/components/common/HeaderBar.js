import { useNavigate } from "react-router-dom"
import ArrowBtn from "../../assets/ArrowBtn"
import { HeaderLayout, Title, GoBack } from "./style";

const HeaderBar = ({ title }) => {
  const navigete = useNavigate();

  const handleGoBack = () => {
    navigete(-1)
  }
  if (title === '전체 차량') {
    return (
      <HeaderLayout>

        <Title>{title}</Title>
      </HeaderLayout>
    )
  }
  return (
    <HeaderLayout>
      <GoBack onClick={handleGoBack} >
        <ArrowBtn />
      </GoBack>
      <Title>{title}</Title>
    </HeaderLayout>
  )
}


export default HeaderBar