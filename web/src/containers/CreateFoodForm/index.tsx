import { Container, Button } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useForm, Controller } from "react-hook-form"

import Portal from "../../components/Portal"
import { GridContainer } from "../../components/Grid"
import BasicCloseHeader from "../../components/Header/BasicCloseHeader"
import Location from "../../components/Location"
import {
  TextInput,
  MultilineInput,
  SelectInput,
  TaggingInput,
  ImageInput,
  OptionType,
} from "../../components/Input"

const Body = styled(Container)(({ theme }) => ({
  position: "absolute",
  top: 0,

  minHeight: "100%",
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}))

type CreateFoodFormValues = {
  name: string
  description: string
  category: string
  tags: Array<OptionType>
  images: Array<File>
}

const CreateFoodForm = () => {
  const { control, handleSubmit } = useForm<CreateFoodFormValues>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
      images: [],
    },
  })
  return (
    <Portal className="test">
      <Body>
        <form onSubmit={handleSubmit(value => console.log(value))}>
          <BasicCloseHeader />
          <GridContainer spacing={4}>
            <GridContainer item>
              <Location location="Ah Beng Chicken Rice" />
            </GridContainer>
            <GridContainer item>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <TextInput {...field} label="Name" />}
              />
            </GridContainer>
            <GridContainer item>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <MultilineInput {...field} label="Description" />
                )}
              />
            </GridContainer>
            <GridContainer item>
              <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    {...field}
                    label="Category"
                    options={[{ label: "test", value: "test" }]}
                  />
                )}
              />
            </GridContainer>
            <GridContainer item>
              <Controller
                name="tags"
                control={control}
                // defaultValue={[]}
                render={({ field }) => (
                  <TaggingInput
                    {...field}
                    label="Tags"
                    options={[{ label: "test" }]}
                  />
                )}
              />
            </GridContainer>
            <GridContainer item>
              <Controller
                name="images"
                control={control}
                render={({ field }) => <ImageInput {...field} />}
              />
            </GridContainer>
            <GridContainer item justify="flex-end">
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </GridContainer>
          </GridContainer>
        </form>
      </Body>
    </Portal>
  )
}

export default CreateFoodForm
