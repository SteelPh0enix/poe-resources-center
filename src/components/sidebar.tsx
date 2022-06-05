import * as React from 'react'
import styled from 'styled-components'

const SidebarComponent = styled.aside`
  position: sticky;
  top: 0;
  width: 60ch;

  padding: 10px 10px 10px 15px;
  gap: 10px;

  background-color: #333333;
  color: white;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-self: start;

  transition-duration: 300ms;

  overflow-x: hidden;

  &.hidden {
    width: 100px;
  }
`

const ControlsBar = styled.div`
  display: flex;
  justify-content: flex-end;

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

const SearchBar = styled.input`
  background-color: white;
  color: black;

  margin-right: 5px;

  transition-duration: 300ms;

  &.hidden {
    display: none;
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
      <SearchBar type='text' placeholder='Search' className={hiddenElementsClasses}></SearchBar>
      <SidebarItemsContainer className={hiddenElementsClasses}>
        {children}
      </SidebarItemsContainer>
    </SidebarComponent>
  )
}
