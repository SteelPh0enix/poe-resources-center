import * as React from 'react'
import MainLayout from '../layouts/mainLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { Link } from 'gatsby'

export default function MainPage (): React.ReactElement {
  return (
    <MainLayout>
      <p>Hello, there!</p>
      <p><Link to='/'>This is a local link</Link></p>
      <p><a href='https://google.com/'>This is an external link</a></p>
      <p><button type='button'>This is a button</button></p>
      <p><input type='text' placeholder='This is an input'></input></p>
      <LoremIpsum p={50} />
    </MainLayout>
  )
}
