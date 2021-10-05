import React from 'react'
import styled from 'styled-components'
import resume from '../assets/public/Kay_Hardeman.pdf'
import { FiDownload } from "react-icons/fi"

const DocumentDownloadStyle = styled.div`
margin-top: 2rem;


// BUG issue overriding button text color - color: #d8af95;
.download {
  background-color: rgb(238, 214, 186);
  color: #d8af95;
  font-size: 2rem;
  display: inline-block;
  border:none;
  padding: .7em 2em;
  border-radius: 8px;
  cursor: pointer;
}

.download_icon {
  width: fit-content;
  color: #d8af95;
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
