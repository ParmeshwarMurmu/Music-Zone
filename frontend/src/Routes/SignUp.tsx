import React, { useEffect } from 'react'
import MusicZoneLogo from '../Assets/Music Zone .jpg'
import MusicZone from '../Assets/Music Zone Logo.jpg'
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'



export const SignUp = () => {

    return (
        <div>
            
            <div>
            <Wrap>
                <WrapItem>
                    <Avatar
                        size='lg'
                        name='Prosper Otemuyiwa'
                        src={MusicZone}
                    />{' '}
                </WrapItem>
            </Wrap>
            </div>
            
            <div>
            Sign up to start listening
            </div>
          
            
        </div>
    )
}
