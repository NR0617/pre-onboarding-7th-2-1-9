import { useNavigate } from "react-router-dom"
import ArrowBtn from "../assets/ArrowBtn"

const HeaderBar = ({ title }) => {
  const navigete = useNavigate();

  const handleGoBack = () => {
    navigete(-1)
  }
  return (
    <div>
      <div onClick={handleGoBack} >
        <ArrowBtn />
      </div>
      <h1>{title}</h1>
    </div>
  )
}


export default HeaderBar