import * as React from 'react'
import styled from 'styled-components'

const SidebarComponent = styled.aside`
  position: sticky;
  top: 70px;
  width: 60ch;
  height: 80vh;

  padding: 10px 10px 10px 15px;
  gap: 10px;

  background-color: ${props => props.theme.sidebarColor};
  color: ${props => props.theme.sidebarFontColor};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-self: start;

  transition-duration: 300ms;

  overflow-x: hidden;

  white-space: nowrap;

  &.hidden {
    width: 120px;
  }

  a {
    color: ${props => props.theme.sidebarLinkColor};
  }
`

const ControlsBar = styled.div`
  display: flex;

  margin-right: 5px;
  padding: 5px;
  gap: 10px;

  background-color: #555555;
`

const ControlButton = styled.button`
  background-color: black;
  border-color: black;

  font-size: 20px;
  width: 2em;
  border-radius: 0;
  padding: 2px;

  transition-duration: 300ms;

  &:hover {
    background-color: #333333;
  }

  &.show-hidden-sidebar {
    transform: rotate(180deg);
  }
`

const SidebarItemsContainer = styled.div`
  transition-duration: 300ms;

  &.hidden {
    display: none;
  }
`

export default function Sidebar ({ children }: {children: React.ReactNode}): React.ReactElement {
  const [visible, setVisibility] = React.useState(true)

  React.useEffect(() => {
    const savedVisibility = window.localStorage.getItem('isSidebarVisible')
    if (savedVisibility != null) {
      setVisibility(JSON.parse(savedVisibility))
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('isSidebarVisible', String(visible))
  }, [visible])

  const changeVisibility = () => {
    return setVisibility(!visible)
  }

  let hiddenElementsClasses = ''
  let showSidebarButtonClasses = ''

  if (!visible) {
    hiddenElementsClasses += 'hidden'
    showSidebarButtonClasses += 'show-hidden-sidebar'
  }

  return (
    <SidebarComponent className={hiddenElementsClasses}>
      <ControlsBar>
        <ControlButton title='Hide sidebar' onClick={changeVisibility} className={showSidebarButtonClasses}>❮</ControlButton>
      </ControlsBar>
      <SidebarItemsContainer className={hiddenElementsClasses}>
        {children}
      </SidebarItemsContainer>
    </SidebarComponent>
  )
}
