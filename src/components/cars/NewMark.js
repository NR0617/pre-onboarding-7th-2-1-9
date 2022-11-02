import tw from "tailwind-styled-components"

const NewMark = () => {
  return(
    <NewMarkContent>신규</NewMarkContent>
  )
}
const NewMarkContent = tw.div`
bg-myBlue
text-white
absolute
top-[5%]
left-[75%]
rounded-2xl
w-12
text-center
`

export default NewMark