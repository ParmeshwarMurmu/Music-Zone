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

      <div className='flex justify-evenly'>
        <div>
          <p className='text-lg mb-4'>
            Community
          </p>
          <p className='text-sm mb-2 cursor-pointer'>Blogs</p>
          <p className='text-sm mb-2 cursor-pointer'>Community</p>
          <p className='text-sm mb-2 cursor-pointer'>Developers</p>
        </div>

        <div>
          <p className='text-lg mb-4'>
            Company
          </p>
          <p className='text-sm mb-2 cursor-pointer'>About Us</p>
          <p className='text-sm mb-2 cursor-pointer'>Team</p>
          <p className='text-sm mb-2 cursor-pointer'>Media</p>
          <p className='text-sm mb-2 cursor-pointer'>Our Commitments</p>
        </div>

        <div>
          <p className='text-lg mb-4'>
            Useful Links
          </p>
          <p className='text-sm mb-2 cursor-pointer'>Terms & Services</p>
          <p className='text-sm mb-2 cursor-pointer'>Policy & Privacy</p>
         
        </div>
      </div>

      <div>

      </div>

      <div>

      </div>


    </div>
  )
}
