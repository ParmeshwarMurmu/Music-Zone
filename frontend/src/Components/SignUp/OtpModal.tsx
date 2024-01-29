
import { Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcPhoneAndroid } from "react-icons/fc";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, PhoneAuthProvider } from 'firebase/auth';
import { auth } from '../../fireBase/Config';


interface CustomWindow extends Window {
    recaptchaVerifier?: RecaptchaVerifier;
}


export const OtpModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [phone, setPhone] = useState<string>('');
    const [getOTP, setGetOTP] = useState<boolean>(false)
    const [OTP, setOTP] = useState<string>('')
    const [confirmationResult, setConfirmationResult] = useState<any>(null);
    const [getOtpLoding, setGetOtpLoading] = useState<boolean>(false)

    const handlePhoneChange = (value: string) => {
        setPhone(value);
    };

    const onCaptchaVerify = async () => {
        setGetOtpLoading(true)
        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'callback': () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                setGetOtpLoading(false)
                setGetOTP(true);
                signInWithOTP(recaptchaVerifier)
            }
        },);
        await recaptchaVerifier.render()

    }

    const signInWithOTP = (appVerifier: RecaptchaVerifier) => {
        signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                setConfirmationResult(confirmationResult)

                // window.confirmationResult = confirmationResult;

                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });

    }

    const handleVerifyOTPInput = (value: string, index: number) => {
        const updatedOtp = OTP.split('');
        updatedOtp[index] = value;
        setOTP(updatedOtp.join(''));
    }

    console.log("UserInput Otp", OTP);


    const verifyOTP = () => {
        console.log(OTP);
        if (OTP != null && confirmationResult) {


            confirmationResult.confirm(OTP).then((result: any) => {
                // User signed in successfully.
                alert("signUP sUCCESSFULL")

                const user = result.user;
                console.log(result);

                // ...
            }).catch((error: any) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error);

            });

        }
    }

    return (
        <div>
            <>
                {/* <Button ><FcPhoneAndroid className='mr-5 text-blue-500' fontSize={'30px'} />Sign up Using   OTP</Button> */}
                <Button colorScheme='' size='md' className='w-full mb-4 p-2 outline border-2 hover:border-indigo-300'
                    onClick={onOpen} variant={'none'}
                >
                    <FcPhoneAndroid className='mr-5 text-blue-500' fontSize={'30px'} /> <span className='text-black'>Sign up Using   OTP</span>
                </Button>


                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader className='text-center'>Mobile Verification</ModalHeader>
                        <ModalCloseButton onClick={() => { setGetOTP(false); setPhone('') }} />
                        <ModalBody className='flex justify-center items-center'>
                            {
                                getOTP ? (
                                    <div >

                                        <p className='mb-3 text-center'>OTP Verification</p>
                                        <p className='mb-3 text-center'>{`Enter the code from the SMS we sent to + ${phone}`}</p>

                                        <HStack className='mb-3 flex justify-center items-center'>
                                            <PinInput size='md'>
                                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                                    <PinInputField
                                                    borderColor='grey' 
                                                        key={index}
                                                        onChange={(e) => handleVerifyOTPInput(e.target.value, index)}
                                                    />
                                                ))}
                                            </PinInput>
                                        </HStack>

                                        {/* <Input placeholder='Enter OTP'
                                            onChange={handleVerifyOTPInput}
                                        /> */}
                                        <div className='mb-3 mt-3 flex justify-center items-center'>
                                            <Button colorScheme='teal' size='md'

                                                onClick={verifyOTP}
                                            >
                                                Verify OTP
                                            </Button>

                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className='mb-3'>Verify Your Phone Number</p>
                                        <PhoneInput
                                            country={'in'}
                                            value={phone} onChange={handlePhoneChange}

                                        />


                                        <div id='recaptcha-container' className='mb-3 mt-3'></div>

                                        <div className='flex justify-center items-center'>

                                            <Button colorScheme='teal' size='md'
                                                onClick={onCaptchaVerify}
                                                isDisabled={(phone === '' || phone.length <= 10) ? true : false}
                                            >
                                                Send OTP
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }


                        </ModalBody>

                        {/* <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter> */}
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
