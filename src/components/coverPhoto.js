import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"

const CoverPhoto = (props) => {

  const Container = styled.section`
    width: 100%;
    height 100vh;
    position: relative;
    display: flex;
    overflow: hidden;
  `

  const FixedBg = styled.figure`
    width: 100%;
    height: 100%;
    position: absolute;
  `

  const CaptionContainer = styled.div`
    max-width: ${rhythm(30)};
    margin: auto;
    position: relative;
    color: #fff;
    p {font-size: 2em;}
  `

  let parallaxProps = {
    className : 'custom-class',
    tagOuter : 'figure'
  }

  if (props.parallaxH)
    parallaxProps.x = [50, -50]
  else 
    parallaxProps.y = [-60, 60]

  return (
    <Container>
      <FixedBg>
        <Parallax {...parallaxProps}>
          {props.bg}
        </Parallax>
      </FixedBg>
      <CaptionContainer>
        {props.children ? props.children : <p>{props.caption}</p>}
      </CaptionContainer>
    </Container>
  )
}

const StyledCoverPhoto = styled(CoverPhoto)`
  border: 10px solid red;
`

export default StyledCoverPhoto