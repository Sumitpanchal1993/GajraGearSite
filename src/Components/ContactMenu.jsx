import React from 'react'

function ContactMenu(props) {
  return (
    <>
    <div className="menue">
      <button>{props.name}</button>
    </div>
  </>
  )
}

export default ContactMenu