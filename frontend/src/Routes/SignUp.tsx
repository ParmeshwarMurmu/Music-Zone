import React, { useEffect } from 'react'
import MusicZoneLogo from '../Assets/Music Zone .jpg'
import MusicZone from '../Assets/Music Zone Logo.jpg'
import { AbsoluteCenter, Avatar, Box, Button, Divider, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from 'react-router-dom';
import SignUpCover from '../Assets/SignUpCover.png'
export const SignUp = () => {

    return (
        <div className='flex justify-center items-center'>

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
            
            <div className='w-2/5 pt-2' >
                <img  src={SignUpCover} alt="SignUpCover" />
            </div>

            <div className='p-2 '>

                <Heading className='mb-4' as='h2' size='xl'>
                    Sign up to start listening
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
                    Next
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
                        <FcPhoneAndroid className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Sign up Using   OTP</span>
                    </Button>
                </div>

                <div>
                    <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
                    // isLoading
                    >
                        <FcGoogle className='mr-5' fontSize={'30px'} /> <span className='text-black'>Sign up with Google</span>
                    </Button>
                </div>

                <div className='mb-6'>
                    <Button colorScheme='' size='md' className='w-full p-2 outline border-2 hover:border-indigo-300'
                    // isLoading
                    >
                        <ImFacebook2 className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Sign up with Facebook</span>
                    </Button>
                </div>

                <hr className='mb-4'></hr>

                <div className='flex justify-center items-center mb-6'>
                    <p>Already have an account ? <Link to={'/login'}><span className='text-blue-600 underline decoration-solid'>Login here</span></Link></p>
                </div>



                <div className='flex mb-6'>
                    <p className='text-xs text-center'>This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.</p>
                </div>




            </div>


        </div>
    )
}
