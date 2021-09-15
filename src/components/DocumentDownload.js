import React from 'react'
import styled from 'styled-components'
import resume from '../assets/public/Kay_Hardeman.pdf'
import { FiDownload } from "react-icons/fi"

const DocumentDownloadStyle = styled.div`
margin-top: 2rem;
.download {
  font-size: 2rem;
  padding: .7em 2em;
  border-radius: 8px;
  display: inline-block;
  background-color: white;
  border: 3px solid #FFC0CB;;
}
.download_icon {
  width: fit-content;
  color: var(--deep-dark);
}
@media only screen and (max-width: 768px){
  .download{
    font-size: 1.8rem;
  }
}
`

export default function DocumentDownload() {
  return (
    <DocumentDownloadStyle>
    <div className='download'>
      <a href={resume} download="Kay_Hardeman.pdf">Download Resume <FiDownload className='download_icon'/></a>
    </div>
    </DocumentDownloadStyle>
  )
}
