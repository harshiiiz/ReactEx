import React from 'react'
import LineConnection from './LineConnection';

import SmallBox from './SmallBox'

function Card(props) {
  const yellowtxt1 = 'This is a sentence that ellipsize';
  const yellowtxt2 = "This is a sentence that does'nt ellipsize";
  const box10Css = {WebkitBoxFlex: "1", MsFlexPositive: "1", flexGrow: "1"};
  
  let boxClass= 'box';
  if(props.box10 && props.box10 === 'yes'){
    boxClass='box circle'

  }
 
  
  
    
   const style1=props.box10==='yes'?box10Css:{}
  
  return (
    <>
    <div className={boxClass} style={{...style1}}>

       <SmallBox innerbox ='red' innerText = {props.redText}   />
       <SmallBox innerbox ='yellow' innerText = {props.ellipsize ==='yes' ? yellowtxt1 : yellowtxt2} ellipsize = {props.ellipsize} box10yellow ={props.box10yellow} />
       <SmallBox innerbox ='blue' innerText = {props.blueText}  />
       <LineConnection />
       

      </div>
      
      </>
  )
}

export default Card
