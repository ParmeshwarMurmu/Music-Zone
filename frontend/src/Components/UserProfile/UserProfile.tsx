import React, { useContext } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  WrapItem,
  Avatar,
  useToast,
} from '@chakra-ui/react'
import { appContent } from '../../ContextApi/ContextApi'
import { useAppDispatch, useAppSelector } from '../../Redux/Store/Hook'
import { themeValueFromReduxStore } from '../../Redux/ThemeReducer/reducer'
import { isAuthAction } from '../../Redux/isAuthReducer/reducer'
import { useNavigate } from 'react-router-dom'



export const UserProfile = () => {

  const { userDetail } = useContext(appContent);
  const dispatch = useAppDispatch();
  const toast = useToast()

  console.log('userDetails', userDetail)
  const theme = useAppSelector(themeValueFromReduxStore);
  const navigate = useNavigate()

  const logoutHandler = ()=>{
    dispatch(isAuthAction(false))
    localStorage.removeItem('musicToken')
    localStorage.removeItem('musicUserId');
    toast({
      title: `Logout Succssfully`,
      position: 'top-right',
      status: 'success',
      isClosable: true,
      duration: 2000,
    })
    navigate('/')

  }

  return (
    <Menu>
      <MenuButton as={Button} variant={'none'}>
        {/* <WrapItem> */}
          <Avatar size='sm' name={userDetail.name || userDetail.email || `${userDetail.mobile}`} src={''} />
        {/* </WrapItem> */}
      </MenuButton>
      <MenuList
       backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`}
      >
        <MenuItem backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`} color={'white'}>{userDetail.name || userDetail.email || `${userDetail.mobile}`}</MenuItem>
        <MenuItem backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`} color={'white'}>Create a Copy</MenuItem>
        <MenuItem backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`} color={'white'}>Mark as Draft</MenuItem>
        <MenuItem backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`} color={'white'}>Delete</MenuItem>
        <MenuItem backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`} color={'white'}>Attend a Workshop</MenuItem>
        <MenuItem as={Button} width={'50%'} marginLeft={'10px'}
        onClick={logoutHandler}
        >Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
