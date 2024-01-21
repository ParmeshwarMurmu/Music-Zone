import React, { useEffect } from 'react'
import MusicZoneLogo from '../Assets/Music Zone .jpg'
import MusicZone from '../Assets/Music Zone Logo.jpg'
import { AbsoluteCenter, Avatar, Box, Button, Divider, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FcPhoneAndroid } from "react-icons/fc";

export const SignUp = () => {

    return (
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

            <div className='w-full md:w-1/5 lg:w-2/6 m-auto p-2 border-2 '>

                <Heading className='mb-4' as='h2' size='xl'>
                    Sign up to start listening
                </Heading>

                <div className='mb-4'>
                    <p className='mb-2'>Email Address</p>
                    <Input placeholder='name@gmail.com'
                        type='text'
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

                <div>
                    <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
                    // isLoading
                    >
                    <ImFacebook2 className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Sign up with Facebook</span>
                    </Button>
                </div>

                


            </div>


        </div>
    )
}
