import { Control, Controller } from "react-hook-form"
import { GridContainer } from "../../components/Grid"

import { FormItem } from "./FormItem"

type FormProps<FieldValue> = {
  items: FormItem<FieldValue, any>[]
  onSubmit: React.FormEventHandler
  control: Control<FieldValue>
}

function Form<FieldValue>({
  items,
  onSubmit,
  control,
}: FormProps<FieldValue>): JSX.Element {
  return (
    <form onSubmit={onSubmit}>
      <GridContainer spacing={4}>
        {items.map(({ name, Comp, defaultValue, props }, index) => (
          <GridContainer item>
            <Controller
              name={name}
              key={index}
              control={control}
              defaultValue={defaultValue}
              render={({ field }) => <Comp {...field} {...props} />}
            />
          </GridContainer>
        ))}
      </GridContainer>
    </form>
  )
}

export default Form
