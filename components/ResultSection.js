import styled from 'styled-components'

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 20px;
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

const ResultSection = ({ label, children }) => {
  return (
    <div>
      <Label>{label}</Label>
      <InputRow>{children}</InputRow>
    </div>
  )
}

export default ResultSection
