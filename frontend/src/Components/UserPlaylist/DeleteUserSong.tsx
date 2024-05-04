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
    useToast,
} from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
import { allMusic, userData } from '../../Interfaces/Interfce';
import axios from 'axios';
import { APP_URL, USER_PLAYLIST_SONG_DELETE_ENDPONT } from '../../Endpoints/Endpoints';
import { useAppDispatch } from '../../Redux/Store/Hook';
import { getAllUserPlaylistSong } from '../../Redux/PlaylistReducer/Function';




interface DeleteUserSongProps {
    musicId: allMusic
    playlistName: string,
    _id: string
}


const DeleteUserSong: React.FC<DeleteUserSongProps> = ({ musicId, playlistName, _id}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const cancelRef = React.useRef<HTMLButtonElement | null>(null);
    const dispatch = useAppDispatch();
    const deleteSongHandler = ()=>{
    console.log(_id, "id");
    const token = localStorage.getItem('musicToken')
      
      axios.delete(`${APP_URL}${USER_PLAYLIST_SONG_DELETE_ENDPONT}/${_id}`, {
        headers:{
            Authorization: `bearer ${token}`
        }
      })
      .then((res)=>{
        console.log(res);
        dispatch(getAllUserPlaylistSong(playlistName));
        toast({
            title: `${res.data.message}`,
            position: 'top-right',
            status: 'success',
            isClosable: true,
            duration: 2000,
          })
        
      })
      .catch((err)=>{
        console.log(err);
        toast({
            title: `${err.data.message}`,
            position: 'top-right',
            status: 'success',
            isClosable: true,
            duration: 2000,
          })
        
      })
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
