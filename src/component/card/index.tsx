import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CardActionArea from "@mui/material/CardActionArea"
import CaseBase, { CardProps as CardPropsBase } from "@mui/material/Card"
import { useEffect, useState } from "react"

import { StyledCardImg } from "./index.styled"
import cn from "classnames"

export type CardProps = Omit<CardPropsBase, "onClick" | "children"> & {
  _id?: string
  image?: string
  label?: string
  checked?: boolean
  onClick?: (_id?: string) => void
}
export const Card = (props: CardProps) => {
  const { _id, image, label, checked: checkProps, onClick: onClickProps, ...restProps } = props
  const [checked, setChecked] = useState(Boolean(checkProps))

  const onClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onClickProps && onClickProps(_id)
  }

  useEffect(() => {
    setChecked(Boolean(checkProps))
  }, [checkProps])

  return (
    <CaseBase {...restProps} className={cn(restProps.className, checked && "active")}>
      <CardActionArea onClick={onClick}>
        <StyledCardImg>
          <CardMedia component="img" image={image} alt={label} className="img" />
        </StyledCardImg>
        <CardContent>
          <Grid container alignItems="center">
            <Grid>
              <Checkbox checked={checked} size="small" />
            </Grid>
            <Grid flex={1}>
              <Typography variant="body2" component="div">
                {label}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </CaseBase>
  )
}
