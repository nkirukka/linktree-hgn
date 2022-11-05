import { useState } from 'react';
import '../components/styles/Contact.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  const initialVals = {
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  }
  const [input, setInput] = useState(initialVals);
  const [openPopup, setOpenPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleChecked = (e) => {
    setIsChecked(!isChecked);
  }

  const invalidFname = input.first_name.length === 0;
  const invalidLname = input.last_name.length === 0;
  const invalidEmail = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email);
  const invalidMessage = input.message.length === 0;

  const handleFocus=(e) => {
    setFocused(true);
  }

  const validate = () => {
    if (invalidFname || invalidLname || invalidEmail || invalidMessage || !isChecked) {
      setIsError(true);
      setFocused(true);
      setIsChecked(isChecked)
      return false
    } else {
      setIsError(false)
      return true
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setInput(initialVals);
      setIsError(false)
      setFocused(false);
      setIsChecked(!isChecked);
      setOpenPopup(true);
    }
    
  };
  
  
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
            <input type='text' onBlur={handleFocus} focused={focused.toString()}  onChange={handleChange} required id='first_name' name='first_name' value={input.first_name} placeholder='Enter your first name' />
            {focused ?  <span className='Error'>Please enter a valid first name</span> : null}
          </div>

          {/* ### Last Name */}
          <div className='Controls'>
            <label htmlFor='last_name'>Last name</label>
            <input type='text' required onBlur={handleFocus} focused={focused.toString()}  onChange={handleChange} id='last_name' name='last_name' value={input.last_name} placeholder='Enter your last name' />
            {focused ? <span className='Error'>Please enter a valid last name</span> : null}
          </div>
        </div>

        {/* ### Email */}
        <div className='Controls'>
          <label htmlFor='email'>Email</label>
          <input type='email' required onBlur={handleFocus} focused={focused.toString()}  onChange={handleChange} id='email' name='email' value={input.email} placeholder='yourname@email.com' />
          {focused ? <span className='Error'>Please enter a valid email address</span> : null}
        </div>

        {/* ### Textarea */}
        <div className='Controls'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' required onBlur={handleFocus} focused={focused.toString()}  onChange={handleChange} name='message' value={input.message} rows='5' placeholder="Send me a message and I'll reply you as soon as possible..." />
          {focused ? <span className='Error'>Please enter a message</span> : null}
        </div>

        {/* ### Permission */}
        <div className='Checkbox_control'>
          <input type='checkbox' onBlur={handleFocus} focused={focused.toString()} onChange={handleChecked} name='permission' required checked={isChecked} value='' id='permission' />
          <label htmlFor='permission'>You agree to providing your data to Nkiruka who may contact you.</label>
        </div>

        <button type='submit' id='btn__submit'>Send message</button>
      </form>

      {openPopup ?
        <div className='Overlay'>
          <div className='Popup'>
            <p>Thank you for your message, you will get a response shorlty.</p>
            {/* <button type='button' onClick={() => { setOpenPopup(false) }} className='Close'>Close</button> */}
            <Link className='Home_link' to='/'>BACK TO HOME</Link>
          </div>
        </div>
        : null
      }
    </section>
  );
}

export default Contact;