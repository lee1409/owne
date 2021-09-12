import chroma from "chroma-js"
import { Chip, ChipProps } from "@material-ui/core"
import { FC } from "react"

export const createLabel = (label: string, count: number) => {
  if (count > 0) return `${label} +${count}`

  return label
}

// TODO: need improvement
export const getColor = (count: number) => {
  const scale = chroma.scale(["rgba(0, 0, 0, 0.2)", "#C5E1A5"]).classes(10)

  return scale(count / 10).hex()
}

export const createChip =
  (text: string, color: string): FC<ChipProps> =>
  (...props) => {
    return (
      <Chip
        {...props[0]}
        label={text}
        style={{ background: color, marginRight: "10px", marginBottom: "10px" }}
      />
    )
  }
