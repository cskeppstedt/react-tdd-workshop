import React from 'react'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import exampleDep from './exampleDep'
import styles from './HelloComponent.css'

export default function HelloComponent ({ message }) {
  const dynamicText = `This is from a dependency: ${exampleDep()}`
  return (
    <div className={styles.helloComponent}>
      <Title.Primary>Hello world</Title.Primary>
      <Title.Secondary>
        {dynamicText}
      </Title.Secondary>
      <Paragraph.Primary>
        {message}
      </Paragraph.Primary>
    </div>
  )
}
