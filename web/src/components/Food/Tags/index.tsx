import { createChip, createLabel, getColor } from "./utils"

const data = [
  { label: "tagA", count: 16 },
  { label: "tagB", count: 6 },
  { label: "tagC", count: 6 },
  { label: "tagA", count: 16 },
  { label: "tagB", count: 2 },
  { label: "tagC", count: 6 },
  { label: "tagA", count: 16 },
  { label: "tagB", count: 10 },
  { label: "tagC", count: 6 },
]

const Tags = () => {
  return (
    <>
      {data.map(({ label, count }) => {
        const text = createLabel(label, count)
        const color = getColor(count)
        const Chip = createChip(text, color)

        return <Chip size="small" data-testid="test" />
      })}
    </>
  )
}

export default Tags
