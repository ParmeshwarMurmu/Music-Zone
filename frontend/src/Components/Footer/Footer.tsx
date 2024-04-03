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
        <FaTwitter className={`m-4 size-6 cursor-pointer hover:scale-125 `} color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`} />
        <FaFacebook className={`m-4 size-6 cursor-pointer hover:scale-125`}  color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}/>
        <FaInstagram className={`m-4 size-6 cursor-pointer hover:scale-125`} color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`} />
        <FaLinkedin className={`m-4 size-6 cursor-pointer hover:scale-125`}  color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}/>
      </div>

      <div className='flex justify-evenly'>
        <div>
          <p className={`text-18 mb-4 font-semibold font-Inter ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}>
            Community
          </p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}>Blogs</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}>Community</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}>Developers</p>
        </div>

        <div>
          <p className={`text-18 mb-4 font-semibold font-Inter
          ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} 
          `}>
            Company
          </p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>About Us</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Team</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Media</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Our Commitments</p>
        </div>

        <div>
          <p className={`text-18 mb-4 font-semibold font-Inter
          ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} 
          `}>
            Useful Links
          </p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Terms & Services</p>
          <p className={`text-14 mb-2 cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Policy & Privacy</p>
         
        </div>
      </div>

      


    </div>
  )
}
