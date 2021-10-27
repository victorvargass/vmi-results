import styled from 'styled-components'

const Control = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 30%;
`
const Label = styled.label`
  color: #000;
  display: block;
`
const MyP = styled.p`
    border: solid 1px #b1b3b5
    border-radius: 4px;
    text-align: center;
    margin-bottom: 5px;
`

const DisplayValue = ({ label, value }) => {
  return (
    <Control>
      <Label>{label}</Label>
      <MyP>{value}</MyP>
    </Control>
  )
}

export default DisplayValue
