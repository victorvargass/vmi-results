import styled from 'styled-components'

const Control = styled.div`
  margin-top: 30%;
  margin-bottom: 30%;
`
const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
  font-size: 24px;
  text-align: center;
`

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 5px 5px 5px
`

const InputSection = ({ label, children }) => {
  return (
    <Control>
      <Label>{label}</Label>
      <InputRow>{children}</InputRow>
    </Control>
  )
}

export default InputSection
