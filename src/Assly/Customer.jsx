import React from "react";
import Force from '../Media_File/forceLogo.png'
import './Customer.css'


let custArr = [
   {logo:'',
    title:''
  },
]


export default function Customer() {
  return <>
    <div className="customerbBase">
      <CustomerCard/>
      <CustomerCard/>
      <CustomerCard/>
      <CustomerCard/>
      <CustomerCard/>
      <CustomerCard/>
      
    </div>
  </>;
}



function CustomerCard (){
  return(
<div className="cusyCard">
        <img src={Force} alt="" />
        <h3>Automotive Customer</h3>
      </div>)
}