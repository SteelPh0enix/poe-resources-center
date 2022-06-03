import * as React from 'react'
import styled from 'styled-components'

interface SidebarComponentProps {
  visible: boolean
}

const SidebarComponent = styled.aside<SidebarComponentProps>`
  position: sticky;
  top: 0;

  padding: 10px 10px 10px 15px;
  gap: 10px;

  background-color: #333333;
  color: white;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-self: start;
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

  &:hover {
    background-color: #333333;
  }
`

const SearchBar = styled.input`
  background-color: white;
  color: black;

  margin-right: 5px;
`

export default function Sidebar ({ children }: {children: React.ReactNode}): React.ReactElement {
  const [visible, setVisibility] = React.useState(true)

  React.useEffect(() => {
    const savedVisibility = window.localStorage.getItem('isSidebarVisible')
    console.log(`saved visibility: ${savedVisibility}`)
    if (savedVisibility != null) {
      setVisibility(JSON.parse(savedVisibility))
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('isSidebarVisible', String(visible))
    console.log(`set visibility: ${visible}`)
  }, [visible])

  const changeVisibility = () => {
    return setVisibility(!visible)
  }

  return (
    <SidebarComponent visible={visible}>
      <ControlsBar>
      <ControlButton title='Hide sidebar' onClick={changeVisibility}>❮</ControlButton>
      </ControlsBar>
      <SearchBar type='text' placeholder='Search'></SearchBar>
      {children}
    </SidebarComponent>
  )
}
