import { Heading } from '@chakra-ui/react';
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useAppSelector } from '../../Redux/Store/Hook';
import { themeValueFromReduxStore } from '../../Redux/ThemeReducer/reducer';

export const Footer = () => {

  const theme = useAppSelector(themeValueFromReduxStore)

  console.log(theme, "theme")

  return (
    <div className={``}>

      <div className='flex justify-center'>
        <FaTwitter className={`m-4 size-6 cursor-pointer hover:scale-125`} />
        <FaFacebook className={`m-4 size-6 cursor-pointer hover:scale-125`} />
        <FaInstagram className={`m-4 size-6 cursor-pointer hover:scale-125`} />
        <FaLinkedin className={`m-4 size-6 cursor-pointer hover:scale-125`} />
      </div>

      <div className='flex justify-evenly'>
        <div>
          <p className={`text-18 mb-4 font-semibold font-Inter text-neutral-textDarkThemeClor `}>
            Community
          </p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter text-neutral-headingDarkThemeColor `}>Blogs</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Community</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Developers</p>
        </div>

        <div>
          <p className={`text-18 mb-4 font-semibold font-Inter`}>
            Company
          </p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>About Us</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Team</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Media</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Our Commitments</p>
        </div>

        <div>
          <p className={`text-18 mb-4 font-semibold font-Inter`}>
            Useful Links
          </p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Terms & Services</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter`}>Policy & Privacy</p>
         
        </div>
      </div>

      


    </div>
  )
}
