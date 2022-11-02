import tw from 'tailwind-styled-components'

const ListHeader = ({children}) =>{
  return(
    <HeaderName>{children}</HeaderName>
  )
}

const HeaderName = tw.header`

`

export default ListHeader