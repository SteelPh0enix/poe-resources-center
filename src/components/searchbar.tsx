import * as React from 'react'
import styled from 'styled-components'

const SearchBarComponent = styled.input`
  background-color: white;
  color: black;

  transition: all 1s;

  &.hidden {
    display: none;
  }

  &:active, &:focus {
    flex: 1 1 15%;
  }
`

export default function SearchBar (): React.ReactElement {
  return (
    <SearchBarComponent type='text' placeholder='Search'/>
  )
}
