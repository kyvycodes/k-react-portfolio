import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('');
  return (
    <div>
       <form>
          <div className='form_group'>
            <label htmlFor='name'>Your Name</label>
            <input
            type="text"
            id='name'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}/>
          </div>
        </form>
    </div>
  )
}
