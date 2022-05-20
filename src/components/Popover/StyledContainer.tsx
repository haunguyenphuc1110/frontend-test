import styled from "styled-components"
import { colors } from "../../styles/themes"
import { Coords } from "./Popover"

interface Props {
  coords: Coords
  className: string
}

const StyledContainer = styled.div`
  width: 177px;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  position: absolute;
  margin-top: 24px;
  z-index: 1030;
  &:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent ${colors.white} transparent;
    position: absolute;
  }
  &.top {
    right: ${(props: Props) => props.coords.left - 10 + "px"};
    top: ${(props: Props) => `${props.coords.width - props.coords.top}px`};
    transform: translate(-25%, -75%);
  }
  &.top:before {
    right: 45%;
    bottom: -15px;
    transform: rotate(180deg);
  }
  &.right {
    right: ${(props: Props) => `calc(100% - ${props.coords.left + props.coords.width + 10}px)`};
    top: ${(props: Props) => `${props.coords.top + 10}px`};
    transform: translate(100%, 0%);
  }
  &.right:before {
    left: -15px;
    top: 30px;
    transform: rotate(-90deg);
  }
  &.left {
    left: ${(props: Props) => props.coords.left - 10 + "px"};
    top: ${(props: Props) => `${props.coords.top + 10}px`};
    transform: translate(-100%, 0%);
  }
  &.left:before {
    right: -15px;
    top: 30px;
    transform: rotate(90deg);
  }
  &.bottom {
    right: ${(props: Props) => props.coords.left - 10 + "px"};
    bottom: ${(props: Props) => `${props.coords.bottom - 10}px`};
    transform: translate(-25%, -75%);
  }
  &.bottom:before {
    right: 45%;
    top: -15px;
  }
`

export default StyledContainer
