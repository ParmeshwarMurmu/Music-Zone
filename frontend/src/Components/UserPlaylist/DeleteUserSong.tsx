import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
import { allMusic, userData } from '../../Interfaces/Interfce';



interface DeleteUserSongProps {
    musicId: allMusic
    playlistName: string,
    _id: string
}


const DeleteUserSong: React.FC<DeleteUserSongProps> = ({ musicId, playlistName, _id}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<HTMLButtonElement | null>(null);

    const deleteSongHandler = ()=>{

    }



    return (
        <div>

            <Button onClick={onOpen} colorScheme='teal' size='sm' className='w-108'
            >  <MdDelete fontSize={'20px'} /> </Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to discard all of your notes? 44 words will be
                        deleted.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3}
                        onClick={deleteSongHandler}
                        >
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}

export default DeleteUserSong
