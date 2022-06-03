import * as React from 'react'
import MainLayout from '../layouts/mainLayout'
import LoremIpsum from 'react-lorem-ipsum'

export default function MainPage(): React.ReactElement {
  return (
    <MainLayout>
      <p>Hello, there!</p>
      <LoremIpsum p={50} />
    </MainLayout>
  )
}
