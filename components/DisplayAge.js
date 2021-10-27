import styled from 'styled-components'

const Control = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
`
const MyP = styled.p`
    padding: 8px;
    border: solid 1px #b1b3b5
    border-radius: 4px;
    text-align: center;
    width: 50%;
    margin-bottom: 5px;
`

const DisplayAge = ({ label, value }) => {
  return (
    <Control>
      <Label>{label}</Label>
      {typeof value.years === 'number' ? (
        <MyP>
          {value.years} años {value.months} meses
        </MyP>
      ) : (
        <MyP> No hay datos </MyP>
      )}
    </Control>
  )
}

export default DisplayAge
