import styled from 'styled-components'

const ButtonElement = styled.button`
  background: #7093DB;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #7093DB;
  border-radius: 3px;
  cursor: pointer;
`
const Center = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 10%;
`

const Button = ({ children, ...props }) => {
  return (
    <Center>
      <ButtonElement {...props} >{children}</ButtonElement>
    </Center>
  )
}

export default Button
