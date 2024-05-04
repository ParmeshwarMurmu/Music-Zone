import { Skeleton } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const UserPlaylistLoader = () => {
    return (
        <DIV className='h-screen overflow-y-auto' >

            <div className={`grid 2xl:grid-cols-7 gap-y-6  mt-12
          xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 mobiles-max:grid-cols-3 small:grid-cols-2`} >

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>

                <div>
                    <Skeleton h={'150px'} w={'90%'} marginLeft={'8px'}>

                    </Skeleton>

                    <div className={'flex justify-center items-center'}>
                        <Skeleton h={'30px'} w={'60%'} marginLeft={'8px'} marginTop={'15px'}>

                        </Skeleton>
                    </div>
                </div>



            </div>
        </DIV>
    )
}

export default UserPlaylistLoader

const DIV = styled.div`
  #playBtn{
  display: none;
}

#musicContainer:hover #playBtn {
  display: block;
}
`
