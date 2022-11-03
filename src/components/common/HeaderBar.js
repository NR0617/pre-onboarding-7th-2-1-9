import tw from 'tailwind-styled-components'
import { useNavigate } from "react-router-dom"
import ArrowBtn from "../../assets/ArrowBtn"

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

const HeaderLayout = tw.section`
h-10
fixed
top-0
left-0
right-0
flex
bg-white
`
const Title = tw.h1`
w-full
text-center
font-bold
text-2xl
`
const GoBack = tw.div`
cursor-pointer
ml-3
`

export default HeaderBar