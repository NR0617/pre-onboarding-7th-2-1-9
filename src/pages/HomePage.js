import Layout from "../components/common/Layout"
import HeaderBar from "../components/common/HeaderBar"
import Main from "../container/Main"
const HomePage = () => {
  return (
    <Layout>
      <HeaderBar title={'전체 차량'} />
      <Main />
    </Layout>
  )
}


export default HomePage