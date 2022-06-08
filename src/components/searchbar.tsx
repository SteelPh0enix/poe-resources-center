import * as React from 'react'
import styled from 'styled-components'

const SearchBarComponent = styled.input`
  background-color: white;
  color: black;

  &.hidden {
    display: none;
  }
`

export default function SearchBar (): React.ReactElement {
  return (
    <SearchBarComponent type='text' placeholder='Search'/>
  )
}
