import tw from 'tailwind-styled-components'

const ListItem = ({children}) => {
  return(
    <ItemLi>{children}</ItemLi>
  )
}
const ItemLi = tw.li`
  flex
  p-1.5
`

export default ListItem