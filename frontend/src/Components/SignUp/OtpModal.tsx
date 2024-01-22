import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcPhoneAndroid } from "react-icons/fc";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const OtpModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [phone, setPhone] = useState<string>('');
    const [getOTP, setGetOTP] = useState<boolean>(false)

    const handlePhoneChange = (value: string) => {
        setPhone(value);
    };

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
                        <ModalCloseButton onClick={()=>{setGetOTP(false); setPhone('')}} />
                        <ModalBody>
                            {
                                getOTP ? (
                                    <div>
                                        <p>OTP Verification</p>
                                        <p>{`Enter the code from the SMS we sent to + ${phone}`}</p>

                                        <Input placeholder='Enter OTP' />
                                        <Button colorScheme='teal' size='md'>
                                            Submit
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Verify Your Phone Number</p>
                                        <PhoneInput
                                            country={'us'}
                                            value={phone} onChange={handlePhoneChange}
                                        />

                                        <Button colorScheme='teal' size='md'
                                            onClick={() => { setGetOTP(true) }}
                                        >
                                            Get OTP
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
