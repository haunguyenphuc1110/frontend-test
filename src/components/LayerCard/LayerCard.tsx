import { useState } from "react"
import React from "react"

import { Card, CardMedia, Checkbox, Typography } from "@mui/material"
import FormControlLabel from "@mui/material/FormControlLabel"
import { Box } from "@mui/system"
import { colors } from "../../styles/themes"

type LayerCardProps = {
  checked?: boolean
  backgroundImage?: string
  label: string
  onCheckedChange?: () => void
}

const LayerCard = ({ checked, backgroundImage, label, onCheckedChange }: LayerCardProps) => {
  const [hover, setHover] = useState(false)

  const onMouseOver = () => {
    setHover(true)
  }

  const onMouseOut = () => {
    setHover(false)
  }

  return (
    <Card
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      sx={{
        width: "229px",
        borderRadius: "10px",
        border: checked ? `1px solid ${colors.primaryDark}` : !hover ? `1px solid ${colors.grey200}` : 0,
        boxShadow: hover ? `0px 0px 0px 2px ${colors.primaryShadow}` : 0
      }}
    >
      <CardMedia component="img" height="100px" image={backgroundImage} alt="background image" />
      <Box sx={{ display: "flex", height: "50px", alignItems: "center", paddingLeft: "18.25px" }}>
        <FormControlLabel
          checked={checked}
          onChange={onCheckedChange}
          control={
            <Checkbox
              sx={{
                color: colors.darkGrey,
                "&.Mui-checked": {
                  color: colors.primaryLight
                }
              }}
            />
          }
          label={<Typography sx={{ fontSize: "14px", fontWeight: 400, color: colors.lightBlack }}>{label}</Typography>}
        />
      </Box>
    </Card>
  )
}

export default LayerCard
