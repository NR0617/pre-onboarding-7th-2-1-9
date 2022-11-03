import tw from 'tailwind-styled-components'

const Layout = ({children}) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

const Container = tw.section`
flex
items-center
justify-center
`

export default Layout