import tw from 'tailwind-styled-components'

const ListHeader = ({children}) =>{
  return(
    <HeaderName>{children}</HeaderName>
  )
}

const HeaderName = tw.header`
bg-myBlue
text-white
`

export default ListHeader