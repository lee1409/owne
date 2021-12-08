import { ButtonBase, InputBase, InputBaseProps } from "@material-ui/core"
import React from "react"
import Icon from "../Icon"
import { styled } from "@material-ui/core/styles"

const Container = styled("div")({
  border: "1px solid black",
  borderRadius: 6,
  position: "relative",
})

const ItemWrapper = styled("div")({
  width: 250,
  padding: 6,
  display: "flex",
  alignItems: "center",
})

const IconWrapper = styled("div")({
  padding: 6,
})

// The search bar should contain afew of suggestion
// for user to click
// TODO: The search functionality is barely working.
function SearchBar({
  loading = false,
  options,
  onEnter,
  ...props
}: SearchBarProps) {
  return (
    <form onSubmit={onEnter}>
      <Container>
        <ItemWrapper>
          <IconWrapper>
            <Icon variant={"Search"} />
          </IconWrapper>
          <InputBase {...props} />
        </ItemWrapper>
        <div
          style={{
            position: "absolute",
            border: "1px solid black",
            borderTop: "none",
          }}
        >
          {loading ? (
            <ItemWrapper>Loading</ItemWrapper>
          ) : (
            options.map((el, idx) => {
              return (
                <ItemWrapper key={typeof el === "string" ? idx : el.id}>
                  <ButtonBase
                    onClick={e =>
                      props.resultClick ? props.resultClick(e, el) : null
                    }
                  >
                    <div style={{ width: 36 }}></div>
                    <div>{typeof el === "string" ? el : el.name}</div>{" "}
                  </ButtonBase>
                </ItemWrapper>
              )
            })
          )}
        </div>
      </Container>
    </form>
  )
}

export type SearchItem =
  | {
      id: string
      name: string
    }
  | string

export type SearchBarProps = {
  options: SearchItem[]
  resultClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: SearchItem
  ) => void
  loading?: boolean
  onEnter?: (e: React.FormEvent<HTMLFormElement>) => void
} & InputBaseProps

export default SearchBar
