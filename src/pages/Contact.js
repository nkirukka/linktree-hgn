import '../components/styles/Contact.css';

const Contact = () => {
  return (
    <section className='Contact'>
      {/* ### Header */}
      <header className='Contact__header'>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      {/* ### Form */}
      <form className='Form__group'>

        <div className='First-last__container'>
          
          {/* ### First Name */}
          <div className='Controls'>
            <label htmlFor='first_name'>First name</label>
            <input type='text' id='first_name' name='first_name' placeholder='Enter your first name' />
          </div>

          {/* ### Last Name */}
          <div className='Controls'>
            <label htmlFor='last_name'>Last name</label>
            <input type='text' id='last_name' name='last_name' placeholder='Enter your last name' />
          </div>
        </div>

        {/* ### Email */}
        <div className='Controls'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='yourname@email.com'  />
        </div>

        {/* ### Textarea */}
        <div className='Controls'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' rows='5' placeholder="Send me a message and I'll reply you as soon as possible..."/>
        </div>

        {/* ### Permission */}
        <div className='Checkbox_control'>
          <input type='checkbox' id='permission' />
          <label htmlFor='permission'>You agree to providing your data to Nkiruka who may contact you.</label>
        </div>

        <button type='submit' id='btn__submit'>Send message</button>
      </form>
    </section>
  );
}

export default Contact;