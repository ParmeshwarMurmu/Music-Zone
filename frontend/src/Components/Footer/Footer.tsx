import React from 'react'
import { FaTwitter, FaFacebook,FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {

  return (
    <div>

      <div className='flex justify-center'>
      <FaTwitter className='m-4 size-6 cursor-pointer hover:scale-125' />
      <FaFacebook className='m-4 size-6 cursor-pointer hover:scale-125' />
      <FaInstagram className='m-4 size-6 cursor-pointer hover:scale-125' />
      <FaLinkedin className='m-4 size-6 cursor-pointer hover:scale-125' />
      </div>
        
        <div>
         <div>
            <h1>Company</h1>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
         </div>
        </div>

        <div>

        </div>

        <div>

        </div>


    </div>
  )
}
