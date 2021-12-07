import { Path, PathValue, UnpackNestedValue } from "react-hook-form"
import {
  ImageInput,
  MultilineInput,
  SelectInput,
  TaggingInput,
} from "../../Input"

export interface FormItem<FieldValue, Props> {
  name: Path<FieldValue>
  Comp: Function
  defaultValue?: UnpackNestedValue<PathValue<FieldValue, Path<FieldValue>>>
  props: Props
}

// Act as base props
type InputProps = {
  label: string
}

type SelectProps = InputProps & {
  options: {
    label: string
    value: string
  }[]
}

type Option = {
  inputValue?: string
  label: string
}

type TaggingProps = InputProps & {
  options: Option[]
}

export function createMultilineInput<FieldValue>(
  name: Path<FieldValue>,
  label: string
): FormItem<FieldValue, InputProps> {
  return {
    name,
    Comp: MultilineInput,
    props: {
      label,
    },
  }
}

export function createSelectInput<FieldValue>(
  name: Path<FieldValue>,
  label: string,
  options: { label: string; value: string }[]
): FormItem<FieldValue, SelectProps> {
  return {
    name,
    Comp: SelectInput,
    props: {
      label,
      options,
    },
  }
}

export function createTaggingInput<FieldValue>(
  name: Path<FieldValue>,
  label: string,
  options: { label: string; inputValue?: string }[]
): FormItem<FieldValue, TaggingProps> {
  return {
    name,
    Comp: TaggingInput,
    props: {
      label,
      options,
    },
  }
}

export function createImageInput<FieldValue>(
  name: Path<FieldValue>,
  label: string
): FormItem<FieldValue, InputProps> {
  return {
    name,
    Comp: ImageInput,
    props: {
      label: label,
    },
  }
}
