import React, { useEffect } from 'react'
import MusicZoneLogo from '../Assets/Music Zone .jpg'
import MusicZone from '../Assets/Music Zone Logo.jpg'
import { AbsoluteCenter, Avatar, Box, Button, Divider, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from 'react-router-dom';
import LoginCover from '../Assets/LoginCover.jpg'


export const Login = () => {
  return (
    <div className='flex justify-center items-center'>
     

     <div className='w-full hidden md:block lg:block md:w-6/12 lg:w-4/12 md:h-screen 
     '>
      <img className='w-full md:h-full lg:h-full' src={LoginCover} alt="Login Cover" />
     </div>


      <div>

        {/* <div>
    <Wrap>
        <WrapItem>
            <Avatar
                size='lg'
                name='Prosper Otemuyiwa'
                src={MusicZone}
            />{' '}
        </WrapItem>
    </Wrap>
</div> */}

     

        <div className='p-2'>

          <Heading className='mb-4' as='h2' size='xl'>
            Login to Music Zone
          </Heading>

          <div className='mb-4'>
            <p className='mb-2'>Email Address</p>
            <Input placeholder='name@gmail.com'
              type='text'
            />

            <p className='mb-2'>Password</p>
            <Input placeholder='Password'
              type='password'
            />
          </div>

          <Button colorScheme='teal' size='md' className='w-full mb-4'
          // isLoading
          >
            Login
          </Button>


          <div className='flex items-center justify-center mb-4'>
            {/* <hr></hr> */}
            <p>Or</p>
            {/* <hr></hr> */}
          </div>

          <div>
            <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
            // isLoading
            >
              <FcPhoneAndroid className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Continue Using OTP</span>
            </Button>
          </div>

          <div>
            <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
            // isLoading
            >
              <FcGoogle className='mr-5' fontSize={'30px'} /> <span className='text-black'>Continue with Google</span>
            </Button>
          </div>

          <div className='mb-6'>
            <Button colorScheme='' size='md' className='w-full p-2 outline border-2 hover:border-indigo-300'
            // isLoading
            >
              <ImFacebook2 className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Continue with Facebook</span>
            </Button>
          </div>

          <hr className='mb-4'></hr>

          <div className='flex justify-center items-center mb-6'>
            <p>Don't have an account ? <Link to={'/signUp'}><span className='text-blue-600 underline decoration-solid'>Signup for Music Zone.</span></Link></p>
          </div>



          <div className='flex mb-6'>
            <p className='text-xs text-center'>This site is protected by reCAPTCHA and the Google
              <span className='underline decoration-solid'>Privacy Policy</span> and <span className='underline decoration-solid'>Terms of Service</span> apply.</p>
          </div>




        </div>


      </div>
    </div >
  )
}
