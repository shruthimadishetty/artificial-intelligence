import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact_container'>
      <h1>CONTACT US</h1>
      <div className='contact_info'>
          <form action="">
            <div className='contact_field'>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className='contact_field'>
              <label htmlFor="">Gmail</label>
              <input type="gmail" />
            </div>
            <div className='contact_field'>
              <label htmlFor="">Mobile</label>
              <input type="text" />
            </div>
            <div className='contact_button'>
              <button>Submit</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Contact
