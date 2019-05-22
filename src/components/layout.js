import React from "react"
import Header from "../components/header"

import "./layout.css"

import styled, { ThemeProvider } from "styled-components"

const LayoutEl = styled.div`
  background-color: ${props =>
    props.theme.secondary ? props.theme.body : undefined};
  color: ${props => (props.theme.secondary ? props.theme.main : undefined)};
  height: 100vh;
`

const light = {
  main: "#2a2a2a",
  secondary: "white",
  link: "white",
  brand: "rebeccapurple",
  body: "white",
}

const dark = {
  main: "white",
  secondary: "#2a2a2a",
  link: "white",
  brand: "palevioletred",
  body: "#2a2a2a",
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lightTheme: true }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    const localStorageLayout = localStorage.getItem("lightTheme")
    if (localStorageLayout) {
      this.setState({ lightTheme: JSON.parse(localStorageLayout) })
    }
  }

  changeTheme() {
    this.setState({
      lightTheme: !this.state.lightTheme,
    })
    localStorage.setItem("lightTheme", !this.state.lightTheme)
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark}>
        <LayoutEl>
          <Header
            siteTitle={"Gatsby Dark Theme Blog"}
            changeTheme={this.changeTheme}
            lightTheme={this.state.lightTheme}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: "1rem",
            }}
          >
            {children}
          </div>
        </LayoutEl>
      </ThemeProvider>
    )
  }
}

export default Layout
