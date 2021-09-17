import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactSection from '../components/ContactSection'


export default function Contacts() {
  return (
    <div>
      <h1>This is the contact page</h1>
      <div>
        <ContactSection />
        <ContactForm />
        <test />
      </div>
    </div>
  )
}

// https://reactjsexample.com/confetti-without-the-cleanup/ for a contact added
