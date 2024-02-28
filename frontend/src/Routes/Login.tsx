import React, { useEffect, useState } from 'react'
import MusicZoneLogo from '../Assets/Music Zone .jpg'
import MusicZone from '../Assets/Music Zone Logo.jpg'
import { AbsoluteCenter, useToast, Avatar, Box, Button, Divider, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginCover from '../Assets/LoginCover.jpg'
import GoogleButton from 'react-google-button'
import { useAppDispatch, useAppSelector } from '../Redux/Store/Hook';
import { loginEmailAction, loginEmailValueFromReduxStore, loginIsErrorAction, loginIsErrorValueFromReduxStore, loginIsLoadingAction, loginIsLoadingValueFromReduxStore, loginPasswordAction, loginPasswordValueFromReduxStore, loginResetAction } from '../Redux/LoginReducer/reducer';
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import axios from 'axios';
import { APP_URL, USER_LOGIN_ENDPOINT } from '../Endpoints/Endpoints';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth } from '../fireBase/Config'
import { isAuthAction, isAuthResetAction, isAuthValueFromReduxStore } from '../Redux/isAuthReducer/reducer';

export const Login = () => {

  // state to handle hide password and show password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //  an instance of the Google provider object
  const provider = new GoogleAuthProvider();

  // Taking out useAppDisptch From Hook.ts
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const toast = useToast()

  // Taking Out all the values from Redux stroe login Reducer

  const userLoginEmail = useAppSelector(loginEmailValueFromReduxStore);
  const userLoginPassword = useAppSelector(loginPasswordValueFromReduxStore);
  const loginIsLoading = useAppSelector(loginIsLoadingValueFromReduxStore);
  const loginIsError = useAppSelector(loginIsErrorValueFromReduxStore);
  
  const isAuth = useAppSelector(isAuthValueFromReduxStore);

  // Function To Handle User Email Input
  const handleLoginEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginEmailAction(e.target.value))

  }

  // Function To Handle User Password Input
  const handleLoginPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginPasswordAction(e.target.value))

  }


  // Fucntion To Handle when User Submit Login Form
  const handleLoginSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let loginCredentials = {
      email: userLoginEmail,
      password: userLoginPassword
    }

    dispatch(loginIsLoadingAction(true))
    axios.post(`${APP_URL}${USER_LOGIN_ENDPOINT}`, loginCredentials)
      .then((res) => {
        console.log(res);
        dispatch(loginIsLoadingAction(false))
        if (res.data.message === 'Login Success') {

          toast({
            title: `${res.data.message}`,
            position: 'top-right',
            status: 'success',
            isClosable: true,
            duration: 2000,
          })
          localStorage.setItem('musicUserId', res.data.userId)
          dispatch(isAuthResetAction())
          dispatch(isAuthAction(true));
          navigate('/')

        } else {
          toast({
            title: `${res.data.message}`,
            position: 'top-right',
            status: 'warning',
            isClosable: true,
            duration: 2000,
          })
        }
        dispatch(loginResetAction())

      })
      .catch((err) => {
        console.log(err);
        toast({
          title: `${err.code}`,
          position: 'top-right',
          status: 'error',
          isClosable: true,
          duration: 3000,
        })
        dispatch(loginIsLoadingAction(false))
        dispatch(loginIsErrorAction(true))


      })

  }

  // Function to handle login using google Account

  const googleLoginHandler = async () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    if(result){
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential ? credential.accessToken : null;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    console.log(credential);
    
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }


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
            Login up to start listening
          </Heading>


          <div className='mb-4'>



            <form onSubmit={handleLoginSubmitForm}>
              <FormControl isRequired mt={1}>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='example@gmail.com' value={userLoginEmail}
                  onChange={handleLoginEmailChange} required
                />
              </FormControl>



              <InputGroup>
                <FormControl isRequired mt={1}>
                  <FormLabel>Password</FormLabel>

                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'}
                      placeholder='Password' value={userLoginPassword}
                      onChange={handleLoginPasswordChange} required
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

                </FormControl>


              </InputGroup>

              <Button
                type='submit'
                colorScheme='teal'
                size='md'
                className='w-full mb-4 mt-4'
                isLoading={loginIsLoading}
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
            <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
            // isLoading
            >
              <FcPhoneAndroid className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Continue Using OTP</span>
            </Button>
          </div>

          <div className='flex justify-center items-center'>

            <GoogleButton
              label='Login with Google'
              onClick={googleLoginHandler}
            />
            {/* <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
            // isLoading
            >
              <FcGoogle className='mr-5' fontSize={'30px'} /> <span className='text-black'>Continue with Google</span>
            </Button> */}
          </div>



          <hr className='mb-4'></hr>

          <div className='flex justify-center items-center mb-6'>
            <p>Don't have an account ? <Link to={'/signUp'}><span className='text-blue-600 underline decoration-solid'>Sign Up</span></Link></p>
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
