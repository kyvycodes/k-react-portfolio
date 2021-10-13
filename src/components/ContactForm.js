import React, { useState } from 'react'
import styled from 'styled-components'
import { ValidationError, useForm } from '@formspree/react'

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

.increase {
  font-size: 2rem;
}

input,
textarea {
  width: 100%;
  // font-size: 3rem;
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

.submitted {
  text-align: center !important;
}


@media only screen and (max-width: 768px){
    flex-direction: column;
    max-width: 100%;
    .form_group {
      width: 100%;
    }
  }


`


export default function ContactForm() {
  const [state, handleSubmit] = useForm('mjvjzawz');

// TODO refactor css for after submit
  if(state.succeeded) {
    return <div className='submitted'> Thank You, I will be getting back to you shortly 📫</div>
  }
  return (
  <FormStyle>
       <form onSubmit={handleSubmit}>
          <div className='form_group'>
            <label htmlFor='name'className="increase">Your Name </label>
            <input
            type="text"
            id='name'
            name='name'
            />
            <label htmlFor='email' className="increase">Your Email </label>
            <input
            type="email"
            id='email'
            name='email'
            />
            <ValidationError field="email" prefix="Email" errors={state.errors} />
            <label htmlFor='message' className="increase">Your Message  </label>
            <textarea
            id='message'
            name='message'
            message='message'
            />
          </div>
          <button
          type="submit"
          disabled={state.submitting}>Send</button>
          {/* <div className="success">Success!</div> */}
        </form>
    </FormStyle>
  )
}
