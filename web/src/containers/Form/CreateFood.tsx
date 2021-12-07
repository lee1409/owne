import Form from "../../components/Form"
import { useForm } from "react-hook-form"
import { OptionType } from "../../components/Input"
import {
  createImageInput,
  createMultilineInput,
  createSelectInput,
  createTaggingInput,
  FormItem,
} from "../../components/Form/FormItem/index"

export type FoodFormValue = {
  name: string
  description: string
  category: string
  tags: OptionType[]
  images: Array<File>
}

const CreateFoodItems: FormItem<FoodFormValue, any>[] = [
  createMultilineInput("name", "Hello"),
  createSelectInput("description", "Description", [
    { label: "test", value: "test" },
  ]),
  createTaggingInput("tags", "Tags", [{ label: "test" }]),
  createImageInput("images", "Images"),
]

export default function CreateFood() {
  const { control, handleSubmit } = useForm<FoodFormValue>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
      images: [],
    },
  })

  return (
    <Form
      items={CreateFoodItems}
      onSubmit={handleSubmit(value => console.log(value))}
      control={control}
    />
  )
}
