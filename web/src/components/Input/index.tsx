import { FC, useRef, useState } from "react"
import {
  TextField,
  MenuItem,
  Chip,
  Button,
  Grid,
  ButtonBase,
  InputLabel,
} from "@material-ui/core"
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete"
import { styled } from "@material-ui/core/styles"
import { ControllerRenderProps } from "react-hook-form"
import Icon from "../Icon"

type TextInputProps = {
  label: string
}

export const TextInput: FC<TextInputProps> = props => {
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      {...props}
    />
  )
}

type MultilineInputProps = {
  label: string
}

export const MultilineInput: FC<MultilineInputProps> = props => {
  return (
    <TextField
      multiline
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      {...props}
    />
  )
}

type SelectOption = {
  label: string
  value: string
}

type SelectInputProps = {
  label: string
  options: Array<SelectOption>
}

export const SelectInput: FC<SelectInputProps> = props => {
  const { options } = props

  return (
    <TextField
      select
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      {...props}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export type OptionType = {
  inputValue?: string
  label: string
}

type TaggingInputProps = {
  label: string
  options: Array<OptionType>
} & ControllerRenderProps

const filter = createFilterOptions<OptionType>()

export const TaggingInput: FC<TaggingInputProps> = props => {
  return (
    <Autocomplete
      fullWidth
      multiple
      freeSolo
      clearOnBlur
      renderInput={params => (
        <TextField
          {...params}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          label={props.label}
        />
      )}
      renderOption={option => option.label}
      getOptionLabel={option => {
        if (typeof option === "string") {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option.label
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        if (params.inputValue !== "") {
          filtered.push({
            inputValue: params.inputValue,
            label: `Add "${params.inputValue}"`,
          })
        }

        return filtered
      }}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.inputValue ? option.inputValue : option.label}
            size="small"
            color="primary"
            {...getTagProps({ index })}
          />
        ))
      }
      {...props}
      onChange={(event, newValue) => {
        props.onChange(() => newValue)
      }}
    />
  )
}

const AddPhotosTile = styled(Button)({
  width: 144,
  height: 144,
  textTransform: "none",
  "& .MuiButton-label": {
    flexDirection: "column",
  },
  "&.MuiButton-outlined": {
    borderColor: "blacK",
  },
})

const PhotoTile = styled("img")({
  width: 144,
  height: 144,
  objectFit: "contain",
  "&:hover": {
    background: "red",
  },
})

type ImageInputProps = ControllerRenderProps

export const ImageInput: FC<ImageInputProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputLabel shrink>Photos</InputLabel>
      </Grid>
      {files.map((file, index) => (
        <Grid item key={`${file.name}-${index}`}>
          <ButtonBase>
            <PhotoTile src={URL.createObjectURL(file)} />
          </ButtonBase>
        </Grid>
      ))}
      <Grid item>
        <input
          type="file"
          hidden
          ref={inputRef}
          onChange={value => {
            const fileArr = Array.from(value.currentTarget.files || [])
            setFiles(fileArr)
            props.onChange(() => fileArr)
          }}
          accept="image/*"
          multiple
        />
        <AddPhotosTile
          variant="outlined"
          onClick={() => inputRef.current?.click()}
        >
          <Icon variant="Plus" />
          Add photos
        </AddPhotosTile>
      </Grid>
    </Grid>
  )
}
