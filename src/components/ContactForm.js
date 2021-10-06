import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from '@formspree/react'

const FormStyle = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 2rem;


.form_group {
  width: 500px;
  margin-bottom: 2rem;
  label = font-size: 1.8rem;
}

input,
textarea {
  width: 100%;
  font-size: 2rem;
  padding: 1.2rem;
  color: var(--gray-1);
  background-color: #e6b396;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
}
textarea {
  min-height: 250px;
  resize: vertical;
}

button[type='submit']{
  background-color: rgb(238, 214, 186);
  color: #d8af95;
  font-size: 2rem;
  display: inline-block;
  border:none;
  padding: 1rem 6rem;
  border-radius: 8px;
  cursor: pointer;
  // &:hover {
  //   background-color: #87685a;
  // }

}

.submitted {}


@media only screen and (max-width: 768px){
    flex-direction: column;
    max-width: 100%;
    .form_group {
      width: 100%;
    }
  }


`


export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm('mjvjzawz');

// TODO refactor css for after submit
  if(state.succeeded) {
    return <div className='submitted'> Thank You, I will be getting back to you shortly 📫</div>
  }
  return (
  <FormStyle>
       <form onSubmit={handleSubmit}>
          <div className='form_group'>
            <label htmlFor='name'>Your Name
            <input
            type="text"
            id='name'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}/>
            </label>
          </div>
          <div className='form_group'>
            <label htmlFor='email'>Your Email
            <input
            type="text"
            id='email'
            email='email'
            value={email}
            onChange={e => setEmail(e.target.value)}/>
            </label>
          </div>
          <div className='form_group'>
            <label htmlFor='message'>Your Message
            <textarea
            type="text"
            id='message'
            message='message'
            value={message}
            onChange={e => setMessage(e.target.value)}/>
             </label>
          </div>
          <button
          type="submit"
          disabled={state.submitting}>Send</button>
          {/* <div className="success">Success!</div> */}
        </form>
    </FormStyle>
  )
}
