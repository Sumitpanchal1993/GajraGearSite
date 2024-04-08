import React from "react";
import './Contact.css'
import BusinessForm from "../Components/BusinessForm";
import ContactMenu from "../Components/ContactMenu";

export default function Contact() {
  return (
    <>
    
      <div className="contactBase">
        <div className="contactSidebar">
        <ContactMenu name ='Business With us'/>        
        <ContactMenu name ='Become our Vendor'/>
        <ContactMenu name ='Request for Quotation'/>
        </div>


        <div className="container">        
          <BusinessForm/>   
        </div>
      </div>
      
    </>
  );
}

