import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import debounce from "lodash.debounce"

import { StyledContent, StyledMain } from "./style"
import { KEY_CODE } from "../../../utils/constants"

const Collapse = ({ content, main }) => {
  const [showContent, setShowContent] = useState(false)
  const [contentHeight, setContentHeight] = useState(null)
  let contentElement
  let setContentSize = () =>
    setContentHeight(contentElement && contentElement.clientHeight)

  useEffect(() => {
    setContentSize = debounce(setContentSize, 500)
    window.addEventListener("resize", setContentSize)

    return () => {
      window.removeEventListener("resize", setContentSize)
      setContentSize.cancel()
    }
  }, [])

  const onToggleHandler = () => {
    setContentHeight(contentElement && contentElement.clientHeight)
    setShowContent(!showContent)
  }

  const onKeyDown = event => {
    if (event.keyCode === KEY_CODE.ENTER || event.keyCode === KEY_CODE.SPACE) {
      onToggleHandler()
    }
  }

  return (
    <>
      <StyledMain
        aria-expanded={showContent}
        onClick={onToggleHandler}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex="0"
      >
        {main(showContent)}
      </StyledMain>
      <StyledContent
        aria-hidden={!showContent}
        height={showContent ? contentHeight : 0}
      >
        <div ref={elem => (contentElement = elem)}>{content}</div>
      </StyledContent>
    </>
  )
}

Collapse.propTypes = {
  content: PropTypes.node,
  main: PropTypes.func,
}

export default Collapse
