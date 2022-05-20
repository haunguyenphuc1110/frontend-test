import React, { useState, ReactNode, useRef, useLayoutEffect } from "react"
import useDebounce from "./useDebounce"
import Container from "./StyledContainer"
import Content from "./StyledContent"
import Title from "./StyledTitle"
import { Button } from "@mui/material"
import { colors } from "../../styles/themes"

type PopoverProps = {
  trigger: "click" | "hover"
  title: ReactNode | (() => ReactNode)
  content: ReactNode | (() => ReactNode)
  placement: "top" | "right" | "left" | "bottom"
}

export type Coords = {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
  x: number
  y: number
}

const Popover: React.FC<PopoverProps> = ({ trigger, title, content, placement, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [coords, setCoords] = useState<Coords>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })

  const debouncedValue = useDebounce<Coords>(coords, 1000)

  const getBoundingClientRect = (element: Element) => {
    const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect()
    return { top, right, bottom, left, width, height, x, y }
  }

  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleMouseOver = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const handleClickOutside = (e: TouchEvent | MouseEvent) => {
    if (!buttonRef.current?.contains(e?.target as Node)) {
      setIsOpen(false)
    }
  }

  useLayoutEffect(() => {
    if (buttonRef.current) {
      setCoords(getBoundingClientRect(buttonRef.current))

      document.addEventListener("mousedown", handleClickOutside)

      if (trigger === "click") {
        buttonRef.current.addEventListener("click", handleClick)
      }

      if (trigger === "hover") {
        buttonRef.current.addEventListener("mouseenter", handleMouseOver)
        buttonRef.current.addEventListener("mouseleave", handleMouseLeave)
      }
    }

    return () => {
      buttonRef.current?.removeEventListener("click", handleClick)
      buttonRef.current?.removeEventListener("mouseenter", handleMouseOver)
      buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [debouncedValue, trigger])

  if (!title && !content) {
    return null
  }

  return (
    <div className="popover">
      <button
        ref={buttonRef}
        style={{
          cursor: "pointer",
          borderWidth: 0,
          backgroundColor: colors.white
        }}
      >
        {children}
      </button>
      {isOpen && (
        <Container className={placement} coords={coords}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </Container>
      )}
    </div>
  )
}

export default Popover
