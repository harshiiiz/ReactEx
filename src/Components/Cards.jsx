import React from 'react'
import Card from './Card'

function Cards() {
  
  return (
    <>      
      <Card  ellipsize='yes' redText = 'A' blueText = 'one'  />
      <Card  ellipsize='no' redText = 'B' blueText = 'two two'  />
      <Card  ellipsize='yes' redText = 'C' blueText = 'three three three'  />
      <Card  ellipsize='no' redText = 'D' blueText = 'four four four four'  />
      <Card  ellipsize='yes' redText = 'E' blueText = 'five five five five five' />
      <Card  ellipsize='no' redText = 'F' blueText = 'six six six six six six'  />
      <Card  ellipsize='yes' redText = 'G' blueText = 'seven seven seven seven seven seven seven' />
      <Card  ellipsize='no' redText = 'H' blueText = 'eight eight eight eight eight eight eight eight' />
      <Card  ellipsize='yes' redText = 'I' blueText = 'nine nine nine nine nine nine nine nine nine'  box9='yes'/>
      <Card  ellipsize='no' redText = 'J' blueText = 'ten ten ten ten ten ten ten ten ten ten' box10 = 'yes' box10yellow='center' />
    </>
      
  )
}

export default Cards