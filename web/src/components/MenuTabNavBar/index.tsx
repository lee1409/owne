import { useState, ChangeEvent } from "react"
import { Tabs, Tab } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderWidth: "0 0 1px 0",
  borderStyle: "solid",
  borderColor: theme.palette.secondary["500"],
  width: "100%",
  marginBottom: "20px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.secondary[500],
  "&$selected": {
    color: theme.palette.primary.main,
  },
}))

const MenuTabNavBar = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChangeIndex = (event: ChangeEvent<{}>, index: number) => {
    setActiveTab(index)
  }

  return (
    <StyledTabs
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      value={activeTab}
      onChange={handleChangeIndex}
    >
      <StyledTab label="Something" />
      <StyledTab label="Something" />
      <StyledTab label="Something" />
      <StyledTab label="Something" />
    </StyledTabs>
  )
}

export default MenuTabNavBar
