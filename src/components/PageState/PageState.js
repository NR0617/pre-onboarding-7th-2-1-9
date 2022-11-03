import React from "react"
import Layout from "../common/Layout"
const PageState = ({ state }) => {
  return (
    <React.Fragment>
      {state === 'empty' ?
        (<Layout>차량 데이터가 없습니다.</Layout>) : <Layout>에러가 발생하였습니다.</Layout>
      }
    </React.Fragment>

  )
}

export default PageState