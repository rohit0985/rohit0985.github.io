
import { HiOutlineMail,} from 'react-icons/hi'
import { BsFillTelephoneFill,} from 'react-icons/bs'
import { ImLocation2} from 'react-icons/im'
import './Contact.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {

  const [send, setSend] = useState(false)
        const formRef = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(
            'service_x9gy7l5', 
            'template_fzg5ztg', 
            formRef.current, 
            'X58Jjzn9E9BbAC48H'
            )
            .then((result) => {
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });
        }

  return (
    <div className='c'>
     <div className="c-top">
     <h1 className='c-heading'>Contact</h1>
     <p className='c-tagline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quaerat? Voluptas eius quaerat reiciendis porro.</p>
     </div>
      {/* <div className="c-bg"></div> */}
      <div className="c-wrapper">
        <div className="c-left">
           
            <div className="c-info">
            <h2 className="c-title">Contact info..</h2>
                <div className="c-item">
                    <label><HiOutlineMail/></label>
                    <p>rohitsharma4681@gmail.com</p>
                </div>
                <div className="c-item">
                    <label><BsFillTelephoneFill/></label>
                    <p>+91-9451441546</p>
                </div>
                <div className="c-item">
                    <label><ImLocation2/></label>
                    <p> Lucknow, India</p>
                </div>
            </div>
        </div>

        <div className="c-right">


<form ref={formRef} onSubmit={sendEmail}>
    <input type="text" placeholder="Name" name="user_name" />
    <input type="email" placeholder="Email" name="user_email" />
    <textarea type="text" placeholder="Message" name="message" />
   <button type='submit'>Submit</button>
   <p>{send && "Thank you..."}</p>
</form>
        </div>


      </div>
    </div>
  )
}

export default Contact
