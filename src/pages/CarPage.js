import { useParams } from "react-router-dom"
import Layout from "../components/common/Layout"
import HeaderBar from "../components/common/HeaderBar"
import CarDetail from "../container/CarDetail"

const CarPage = () => {
  const params = useParams()
  const id = params.id
  return (
    <Layout>
      <HeaderBar title={'차량 상세'} />
      <CarDetail  id={id}/>
    </Layout>
  )
}


export default CarPage