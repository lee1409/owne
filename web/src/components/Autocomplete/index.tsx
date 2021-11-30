import React from "react"
import { Autocomplete as MAutocomplete } from "@material-ui/lab"
import SearchBar from "../SearchBar"

export function Autocomplete(props: {}) {
  return (
    <MAutocomplete
      size="small"
      options={[]}
      renderInput={params => <SearchBar />}
    />
  )
}
