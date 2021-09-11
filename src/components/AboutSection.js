import React from 'react'
import SectionTitle from './SectionTitle'


export default function AboutSection() {
  return (
    <div>
      <div classname='container'>
        <div className="aboutSection_left">
          {/* Section title and sub title uses a component to keep the code dry */}
          <SectionTitle/>

        </div>

      </div>
    </div>
  )
}
