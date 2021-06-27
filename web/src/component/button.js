import React from "react"
import {IconButton} from "@material-ui/core"
import PhotoCamera from "@material-ui/icons/PhotoCamera"

export const ShareButton = ({ ...props }) => (
  <IconButton {...props}>
    <PhotoCamera></PhotoCamera>
  </IconButton>
)
