import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import ToggleTheme from "./toggleTheme"

const HeaderEl = styled.header`
  background-color: ${props =>
    props.theme.secondary ? props.theme.brand : undefined};
  /* a {
    color: ${props => (props.theme.secondary ? props.theme.link : "red")};
  } */
  a {
    color: white;
  }
  z-index: 99;
  padding: 2rem;
`

class Header extends Component {
  render() {
    return (
      <HeaderEl>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link to="/">{this.props.siteTitle}</Link>
          </h1>
          <ToggleTheme
            changeTheme={this.props.changeTheme}
            lightTheme={this.props.lightTheme}
          />
        </div>
      </HeaderEl>
    )
  }
}

export default Header
