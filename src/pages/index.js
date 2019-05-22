import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ThemeCard = styled.div`
  background-color: ${props =>
    props.theme.secondary ? props.theme.brand : undefined};
  color: ${props => (props.theme.secondary ? props.theme.link : undefined)};
  padding: 2rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ThemeCard>Hello I'm a theme component</ThemeCard>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
