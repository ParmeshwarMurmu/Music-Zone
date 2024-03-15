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
  Button
} from '@chakra-ui/react'

import { MdDelete } from "react-icons/md";

import { Playlist, DeletePlaylistProps } from '../../Interfaces/Interfce'


const DeletePlaylist: React.FC<DeletePlaylistProps> = ({ playlist, onDelete }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  // Function to handle deletePlaylist

  const deletePlaylistHandler = () => {
    onDelete();
    onClose();

  }


  return (
    <div>
      <Button onClick={onOpen} variant={'none'} padding={0} margin={0}><MdDelete fontSize={'20px'} className='cursor-pointer' /></Button>
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
            Are you sure you want to delete Playlist ? Once deleted cannot be recovered.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3} onClick={deletePlaylistHandler}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default DeletePlaylist
