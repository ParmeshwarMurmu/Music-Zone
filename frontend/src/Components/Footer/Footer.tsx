import { Heading } from '@chakra-ui/react';
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
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
          <Heading as='h6'>
            Community
          </Heading>
          <p>Blogs</p>
          <p>Community</p>
          <p>Developers</p>
        </div>

        <div>
          <Heading as='h6'>
            Company
          </Heading>
          <p>About Us</p>
          <p>Team</p>
          <p>Media</p>
          <p>Our Commitments</p>
        </div>

        <div>
          <Heading as='h6'>
            Useful Links
          </Heading>
          <p>Terms & Services</p>
          <p>Policy & Privacy</p>
         
        </div>
      </div>

      <div>

      </div>

      <div>

      </div>


    </div>
  )
}
