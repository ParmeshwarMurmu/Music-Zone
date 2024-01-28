
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
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
    const [OTP, setOTP] = useState<number | null>()
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

    const handleVerifyOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOTP(+e.target.value)
    }

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
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton onClick={() => { setGetOTP(false); setPhone('') }} />
                        <ModalBody>
                            {
                                getOTP ? (
                                    <div>

                                        <p>OTP Verification</p>
                                        <p>{`Enter the code from the SMS we sent to + ${phone}`}</p>

                                        <Input placeholder='Enter OTP'
                                            onChange={handleVerifyOTP}
                                        />
                                        <Button colorScheme='teal' size='md'
                                            onClick={verifyOTP}
                                        >
                                            Verify OTP
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Verify Your Phone Number</p>
                                        <PhoneInput
                                            country={'in'}
                                            value={phone} onChange={handlePhoneChange}
                                        />


                                        <div id='recaptcha-container'></div>
                                        <Button colorScheme='teal' size='md'
                                            onClick={onCaptchaVerify}
                                        >
                                            Send OTP
                                        </Button>
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
