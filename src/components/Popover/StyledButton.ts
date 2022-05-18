import styled from "styled-components"
import { colors } from "../../styles/themes"

const Button = styled.button`
  height: 32px;
  padding: 4px 15px;
  margin-bottom: 16px;
  color: ${colors.white};
  border: 1px solid ${colors.primaryDark};
  border-radius: 4px;
  background: ${colors.primaryLight};
  box-shadow: 0 2px #0000000b;
  cursor: pointer;
`

export default Button
