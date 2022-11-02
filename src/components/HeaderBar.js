import tw from 'tailwind-styled-components'
import { useNavigate } from "react-router-dom"
import ArrowBtn from "../assets/ArrowBtn"

const HeaderBar = ({ title }) => {
  const navigete = useNavigate();

  const handleGoBack = () => {
    navigete(-1)
  }
  return (
    <HeaderLayout>
      <div onClick={handleGoBack} >
        <ArrowBtn />
      </div>
      <Title>{title}</Title>
    </HeaderLayout>
  )
}

const HeaderLayout = tw.section`
h-10
fixed
top-0
left-0
right-0
flex
`
const Title = tw.h1`

`

export default HeaderBar