import tw from 'tailwind-styled-components'

const ListItem = ({children}) => {
  return(
    <ItemLi>{children}</ItemLi>
  )
}
const ItemLi = tw.li`
  flex
`

export default ListItem