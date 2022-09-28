import styled from "styled-components"

export const StyledCardImg = styled.div`
  position: relative;
  width: 100%;
  padding-top: 43.67%;
  overflow: hidden;
  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
  }
`
