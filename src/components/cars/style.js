import tw from 'tailwind-styled-components'

export const BoldText = tw.div`
font-bold
`

export const FlexContainer = tw.section`
flex
p-5
border-b-2
border-myBlack
relative
`
export const CarInfo = tw.section`
w-full
`
export const CarImgWrapper = tw.section`
div{
  relative
  w-full
  h-full
}
`
export const FilterInput = tw.div`
${(p)=>p.selected ? 'bg-myBlack' : 'bg-myGray'}
${(p)=>p.selected ? 'text-white' : 'text-myBlack'}
rounded-2xl
w-12
text-center
cursor-pointer
mx-1
`

export const FilterWrapper = tw.section`
flex
border-y-2
border-myBlack
py-[0.5%]
`

export const NewMarkContent = tw.div`
bg-myBlue
text-white
absolute
top-[5%]
left-[75%]
rounded-2xl
w-12
text-center
`