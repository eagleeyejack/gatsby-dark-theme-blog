import React from "react"
import styled from "styled-components"

const TogButton = styled.button`
  border: 0;
  padding: 1rem 1.5rem;
`

const ToggleTheme = ({ changeTheme, lightTheme }) => (
  <TogButton onClick={changeTheme}>
    {lightTheme ? "Dark mode" : "Light mode"}
  </TogButton>
)

export default ToggleTheme
