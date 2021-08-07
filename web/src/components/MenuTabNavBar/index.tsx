import { useState, ChangeEvent } from "react"
import styled from "styled-components"
import { Tabs, Tab } from "@material-ui/core"

const StyledTabs = styled(Tabs)`
  ${({ theme }) => `
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${theme.palette.secondary[500]};
  width: 100%;
  margin-bottom: 20px;

  & .MuiTabs-indicator {
    display: none;
  }
  `}
`

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
      <Tab label="Something" />
      <Tab label="Something" />
      <Tab label="Something" />
      <Tab label="Something" />
    </StyledTabs>
  )
}

export default MenuTabNavBar
