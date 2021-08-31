import { Container, Button, Modal } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useForm, Controller } from "react-hook-form"
import { useContext, FC } from "react"

import { GridContainer } from "../../components/Grid"
import BasicCloseHeader from "../Header/BasicCloseHeader"
import Location from "../../components/Location"
import {
  TextInput,
  MultilineInput,
  SelectInput,
  TaggingInput,
  ImageInput,
  OptionType,
} from "../../components/Input"
import { ModalContext } from "../../contexts/ModalContext"

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

type CreateFoodFormProps = {
  open: boolean
}

const CreateFoodForm: FC<CreateFoodFormProps> = props => {
  const { control, handleSubmit } = useForm<CreateFoodFormValues>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
      images: [],
    },
  })
  const { hideModal } = useContext(ModalContext)

  const handleClose = () => hideModal("createFoodForm")

  return (
    <Modal {...props} onClose={handleClose}>
      <Body>
        <form onSubmit={handleSubmit(value => console.log(value))}>
          <BasicCloseHeader onClose={handleClose} />
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
    </Modal>
  )
}

export default CreateFoodForm
