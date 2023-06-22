import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>CONTACT US</h1>
        <div>
          <form>
            <input
              type='text'
              placeholder='Name'
            />
            <input
              type='email'
              placeholder='E-mail'
            />
            <textarea
              type='text'
              placeholder='Message'
            />
            <button type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact