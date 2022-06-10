import * as React from 'react'
import styled from 'styled-components'

const SidebarComponent = styled.aside`
  position: sticky;
  top: 80px;
  width: 60ch;
  height: 85vh;

  padding: 10px 10px 10px 15px;
  gap: 10px;

  background-color: ${props => props.theme.sidebarColor};
  color: ${props => props.theme.sidebarFontColor};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-self: start;

  transition: ${props => (props.theme.animationsEnabled && props.theme.sidebarToggleAnimationEnabled) ? 'all' : 'none'};
  transition-duration: ${props => props.theme.sidebarToggleAnimationDuration};

  overflow-x: hidden;

  white-space: nowrap;

  scrollbar-color: ${props => props.theme.scrollbarColor} ${props => props.theme.scrollbarBackgroundColor};
  scrollbar-width: 12px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarColor};
  }
   
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.scrollbarBackgroundColor};
  }

  &.hidden {
    width: 120px;
  }
`

const ControlsBar = styled.div`
  display: flex;

  margin-right: 5px;
  padding: 5px;
  gap: 10px;

  background-color: ${props => props.theme.sidebarControlBoxColor};
`

const ControlButton = styled.button`
  font-size: 20px;
  width: 2em;
  border-radius: 0;
  padding: 2px;

  &.show-hidden-sidebar {
    transform: rotate(180deg);
  }
`

const SidebarItemsContainer = styled.div`
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
        <ControlButton type='button' title='Hide sidebar' onClick={changeVisibility} className={showSidebarButtonClasses}>❮</ControlButton>
      </ControlsBar>
      <SidebarItemsContainer className={hiddenElementsClasses}>
        {children}
      </SidebarItemsContainer>
    </SidebarComponent>
  )
}
