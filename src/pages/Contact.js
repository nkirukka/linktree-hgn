import { useState } from 'react';
import '../components/styles/Contact.css';

const Contact = () => {
  const initialVals = {
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  }
  const [input, setInput] = useState(initialVals);
  const [action, setAction] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleChecked = (e) => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.first_name.length === 0 || input.first_name.length < 3) {
      alert('Please enter a valid first name')
    } 
    if (input.last_name.length === 0 || input.last_name.length < 3) {
      alert('Please enter a valid last name')
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      alert('Please enter a valid email')
    }
    if (input.message.length === 0) {
      alert('Please enter a message')
    }
    if (isChecked === false) {
      alert('Accept disclaimer')
    }
    else {
      setInput(initialVals);
      setIsChecked(false);
      setAction(true);
    }
  }
  return (
    <section className='Contact'>
      {/* ### Header */}
      <header className='Contact__header'>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      {/* ### Form */}
      <form className='Form__group' onSubmit={handleSubmit} noValidate>

        <div className='First-last__container'>
          
          {/* ### First Name */}
          <div className='Controls'>
            <label htmlFor='first_name'>First name</label>
            <input type='text' className='Error' onChange={handleChange} id='first_name' name='first_name' value={input.first_name} placeholder='Enter your first name' />
            <span className='Error'>Please enter a valid first name</span>
          </div>

          {/* ### Last Name */}
          <div className='Controls'>
            <label htmlFor='last_name'>Last name</label>
            <input type='text' className='Error' onChange={handleChange} id='last_name' name='last_name' value={input.last_name} placeholder='Enter your last name' />
            <span className='Error'>Please enter a valid last name</span>
          </div>
        </div>

        {/* ### Email */}
        <div className='Controls'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='Error' onChange={handleChange} id='email' name='email' value={input.email} placeholder='yourname@email.com' />
          <span className='Error'>Please enter a valid email address</span>
        </div>

        {/* ### Textarea */}
        <div className='Controls'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' className='Error' onChange={handleChange} name='message' value={input.message} rows='5' placeholder="Send me a message and I'll reply you as soon as possible..." />
          <span className='Error'>Please enter a message</span>
        </div>

        {/* ### Permission */}
        <div className='Checkbox_control'>
          <input type='checkbox' className='Error' checked={isChecked} onChange={handleChecked} name='permission' value='' id='permission' />
          <label htmlFor='permission'>You agree to providing your data to Nkiruka who may contact you.</label>
        </div>

        <button type='submit' id='btn__submit'>Send message</button>
      </form>

      {action ?
        <div className='Overlay'>
        <div className='Popup'>
          <p>Thank you for your message, you will get a response shorlty.</p>
          <button type='button' onClick={()=>{setAction(false)}} className='Close'>Close</button>
        </div>
        </div> 
        : null
      }
    </section>
  );
}

export default Contact;