import React from 'react'

const Contact = () => {
  return (
    <section className='Contact'>
      {/* ### Header */}
      <header>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      {/* ### Form */}
      <form className='Form__group'>

        <div className='First-last__container'>
          
          {/* ### First Name */}
          <div className='Fname_control controls'>
            <label htmlFor='first_name'>First name</label>
            <input type='text' id='first_name' name='first_name' placeholder='Enter your first name' />
          </div>

          {/* ### Last Name */}
          <div className='Lname_control controls'>
            <label htmlFor='last_name'>First name</label>
            <input type='text' id='last_name' name='last_name' placeholder='Enter your last name' />
          </div>
        </div>

        {/* ### Email */}
        <div className='email_control controls'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='yourname@email.com'  />
        </div>

        {/* ### Textarea */}
        <div className='message_control controls'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible..."/>
        </div>

        {/* ### Permission */}
        <div className='checkbox_control'>
          <input type='checkbox' id='permission' />
          <label htmlFor='permission'>You agree to providing your data to Nkiruka who may contact you.</label>
        </div>

        <button type='submit'>Send message</button>
      </form>
    </section>
  );
}

export default Contact;