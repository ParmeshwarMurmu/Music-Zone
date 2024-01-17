import React, { createContext, useState } from 'react'
import { AppContextProps, ContextApiProps } from '../Interfaces/Interfce'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

export const appContent = createContext<AppContextProps>({ // Provide an initial value
  currentTrack: null,
  setCurrentTrack: () => { },
  disclosure: {
    isOpen: false,
    onOpen: () => { },
    onClose: () => { },
    onToggle: () => { },
    isControlled: false,
    getButtonProps: () => ({}),
    getDisclosureProps: () => ({}),
  },
  showMusicPlayer: false,
  setShowMusicPlyer: ()=>{}
  
  
});

export const ContextApi: React.FC<ContextApiProps> = ({ children }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMusicPlayer, setShowMusicPlyer]= useState<boolean>(false)
  const [currentTrack, setCurrentTrack] = useState<AppContextProps['currentTrack'] | null>(null);
  const disclosure: UseDisclosureReturn = {
    isOpen, onOpen, onClose,
    onToggle: () => { }, // Add a dummy function if you don't need this functionality
    isControlled: false, // Change this based on your use case
    getButtonProps: () => ({}), // Add a dummy function if you don't need this functionality
    getDisclosureProps: () => ({}),
  };

  const contextValue: AppContextProps = {
    currentTrack,
    setCurrentTrack,
    disclosure,
    showMusicPlayer,
    setShowMusicPlyer
    
    // Add other properties as needed
  };

  return <appContent.Provider value={contextValue}>{children}</appContent.Provider>
}
