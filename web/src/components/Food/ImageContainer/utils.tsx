import { styled } from "@material-ui/core/styles"
import React, { FC } from "react"

type ImageProps = {
  src: string
  alt: string
}

const MobileImage = styled("img")({
  width: "200px",
  borderRadius: "12px",
})

const DesktopImage = styled("img")({
  width: "100%",
  borderRadius: "12px",
})

export const createImage =
  (isMobile: boolean): FC<ImageProps> =>
  ({ alt, src }) => {
    if (isMobile) return <MobileImage src={src} alt={alt} />

    return <DesktopImage src={src} alt={alt} />
  }
