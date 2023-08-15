import { useState } from "react";
import { isValidEmail, toast } from "../../helpers";
import axios from "axios";
import { BOT_TOKEN, CHAT_ID } from "../../config";
import TextInput from "../form_elements/TextInput";


function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handlerSubmit = (e)=>{
    e.preventDefault();
    const errors = [];

    if(name===''){
      errors.push('Enter your name.');
    }
    if(email===''){
      errors.push('Enter your email address.');
    } else if(!isValidEmail(email)){
      errors.push('Enter valid email address.');
    }
    

    if(!errors.length){
      const text = `
<b>Name:</b> ${name};
<b>Email:</b> ${email};
<b>Message:</b> ${message}`;
      axios
        .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
        .then(resp=>{
          setName('');
          setEmail('');
          setMessage('');
          toast.success('Message send successfully');
        })
        .catch(err=>{
          toast.danger('AJAX error. Please try again later.');
        })
    } else {
      toast.danger(errors.join(' '));
    }

  }

  return (
    <form onSubmit={handlerSubmit}>
      <div className="contact_wrap">
        <div className="phone">
          <TextInput
            label="Name"
            value={name}
            required
            setInputValue={(val)=>{
              setName(val)
            }} />
        </div>
        <div>
          <TextInput
            label="Email"
            value={email}
            required
            setInputValue={(val)=>{
              setEmail(val)
            }} />
        </div>
        <div>
          <TextInput
            label="Message"
            value={message}
            textarea
            setInputValue={(val)=>{
              setMessage(val)
            }} />
        </div>
          <button type="submit" className="btn btn_green btn_form">Send Message</button>
        </div>
    </form>
  )
}
export default FeedbackForm