/**
 * Landing Layout
 *
 * This component is use to define the landing page base layout.
 * - Include the top bar
 * - Include the footer
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { GlobalStyle, StyledLandingLayout, StyledMain } from "./style"
import TopBar from "../../top-bar/TopBar"
import Footer from "../../footer/Footer"
import favicon from "../../../assets/images/favicon.png"

const LandingLayout = ({ children, page }) => (
  <>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Helping new talent into the tech world"
      />
      <title>Hack Your Future Belgium</title>
      <link rel="shortcut icon" href={favicon}></link>
      <link rel="canonical" href="https://hackyourfuture.be/" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;600;900&family=Work+Sans:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <StyledLandingLayout>
      <TopBar page={page} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLandingLayout>
  </>
)

LandingLayout.propTypes = {
  children: PropTypes.node,
}

LandingLayout.defaultProps = {
  isFullWidth: false,
}

export default LandingLayout
