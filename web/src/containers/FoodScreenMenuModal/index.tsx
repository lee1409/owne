import { Modal } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { FC, useContext } from "react"
import IconWithTextButton from "../../components/IconWithTextButton"
import { ModalContext } from "../../contexts/ModalContext"

const Body = styled("div")(({ theme }) => ({
  width: 300,
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  boxSizing: "border-box",
  padding: theme.spacing(2, 5),

  // align modal in the center of the screen
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // arrange children in the center of modal
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
}))

type FoodScreenMenuModalProps = {
  open: boolean
}

// TODO: add button logic
const FoodScreenMenuModal: FC<FoodScreenMenuModalProps> = props => {
  const { hideModal } = useContext(ModalContext)

  const handleClose = () => hideModal("foodScreenMenuModal")

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Body>
        <IconWithTextButton icon="Food" label="Edit Food" />
        <IconWithTextButton icon="NotePlus" label="Create Story" />
        <IconWithTextButton icon="Alert" label="Report" />
      </Body>
    </Modal>
  )
}

export default FoodScreenMenuModal
