import React, { useEffect, useState } from 'react'
import MusicZoneLogo from '../Assets/Music Zone .jpg'
import MusicZone from '../Assets/Music Zone Logo.jpg'
import { AbsoluteCenter, InputGroup, Avatar, Box, Button, Divider, Heading, Input, InputRightElement, Wrap, WrapItem, Tooltip, IconButton, FormControl, FormLabel } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from 'react-router-dom';
import SignUpCover from '../Assets/SignUpCover.jpg'
import { OtpModal } from '../Components/SignUp/OtpModal';
import GoogleButton from 'react-google-button'
import { useAppDispatch, useAppSelector } from '../Redux/Store/Hook';

import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { signUpEmailAction, signUpEmailValueFromRduxStore,  signUpPasswordAction, signUpPasswordValueFromRduxStore } from '../Redux/SignUpReducer/reducer';
import axios from 'axios';
import { APP_URL } from '../Endpoints/Endpoints';


export const SignUp = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordStrengthMessage, setPasswordStrengthMessage] = useState<string>('')

    const dispatch = useAppDispatch();
    const userSignUpEmail = useAppSelector(signUpEmailValueFromRduxStore);
    const userSignUpPassword = useAppSelector(signUpPasswordValueFromRduxStore);




    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(signUpEmailAction(e.target.value))


    }


    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(signUpPasswordAction(e.target.value))
        const passwordFeedback = checkPasswordStrength(e.target.value);
        setPasswordStrengthMessage(passwordFeedback)
    }



    const checkPasswordStrength = (password: string) => {
        console.log("inside strength", password);

        const lowerCaseRegexs = /[a-z]/;
        const upperCaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        const isLowerCasePresent = lowerCaseRegexs.test(password);
        const isUpperCasePresent = upperCaseRegex.test(password);
        const isNumberPresent = numberRegex.test(password);
        const isSpecialCharPresent = specialCharRegex.test(password);


        if (!isLowerCasePresent) {
            return "Password should contain at least one lowercase letter. ";
        }

        if (!isUpperCasePresent) {
            return "Password should contain at least one uppercase letter. ";
        }

        if (!isNumberPresent) {
            return "Password should contain at least one number. ";
        }

        if (!isSpecialCharPresent) {
            return "Password should contain at least one special character. ";
        }

        return 'Strong Password'
    }

    const handleSignUpSubmitForm = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let userData = {
            email :userSignUpEmail,
            password: userSignUpPassword
        }

        axios.post(`${APP_URL}/user/signUp`, userData)
        .then((res)=>{
            console.log(res.data.message);
            
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.data.message);
            
        })
        


    }

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

            <div className='w-full hidden md:block lg:block md:w-6/12 lg:w-4/12 md:h-screen' >
                <img className='w-full md:h-full lg:h-full' src={SignUpCover} alt="SignUpCover" />
            </div>

            <div className='p-2 '>

                <Heading className='mb-4' as='h2' size='xl'>
                    Sign up to start listening
                </Heading>


                <div className='mb-4'>
                    <form onSubmit={handleSignUpSubmitForm}>
                        <FormControl mt={1}>
                            <FormLabel>Email</FormLabel>
                            <Input type='text' placeholder='example@gmail.com' value={userSignUpEmail}
                                onChange={handleEmailChange}
                            />
                        </FormControl>



                        <InputGroup>
                            <FormControl mt={1}>
                                <FormLabel>Password</FormLabel>

                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'}
                                        placeholder='Password' value={userSignUpPassword}
                                        onChange={handlePasswordChange}
                                    />

                                    <InputRightElement width="4.5rem">

                                        {
                                            showPassword ? <Tooltip hasArrow label='hide password' bg='gray.300' color='black'>
                                                <IconButton
                                                    variant={'none'}
                                                    h="1.75rem"
                                                    size="md"
                                                    aria-label=''
                                                    icon={<IoMdEye />}
                                                    onClick={() => { setShowPassword(false) }}
                                                />
                                            </Tooltip> : <Tooltip hasArrow label='show password' bg='gray.300' color='black'>
                                                <IconButton
                                                    variant={'none'}
                                                    h="1.75rem"
                                                    size="md"
                                                    aria-label=''
                                                    icon={<IoMdEyeOff />}
                                                    onClick={() => { setShowPassword(true) }}
                                                />
                                            </Tooltip>
                                        }



                                    </InputRightElement>
                                </InputGroup>

                                <div>
                                    {
                                        passwordStrengthMessage === 'Strong Password' ? <p className='text-green-800 text-xs'>{passwordStrengthMessage}</p> : <p className='text-red-600 text-xs'>{passwordStrengthMessage}</p>
                                    }

                                </div>


                            </FormControl>


                        </InputGroup>

                        <Button
                            type='submit'
                            colorScheme='teal'
                            size='md'
                            className='w-full mb-4 mt-4'
                            // isLoading={isLoading}
                        >
                            Next
                        </Button>


                    </form>


                </div>




                <div className='flex items-center justify-center mb-4'>
                    {/* <hr></hr> */}
                    <p>Or</p>
                    {/* <hr></hr> */}
                </div>

                <div>
                    <OtpModal />
                </div>

                <div className='flex justify-center items-center'>

                    <GoogleButton

                        onClick={() => { console.log('Google button clicked') }}
                    />

                    {/* <Button colorScheme='teal' size='lg'>
                        Button
                    </Button> */}

                    {/* <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
                  
                    >
                        <FcGoogle className='mr-5' fontSize={'30px'} /> <span className='text-black'>Sign up with Google</span>
                    </Button> */}
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
