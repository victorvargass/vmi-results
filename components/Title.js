import styled from 'styled-components'

const H1 = styled.h1`
  color: black;
  text-align: center;
`

const Title = ({ children }) => {
  return <H1>{children}</H1>
}

export default Title
