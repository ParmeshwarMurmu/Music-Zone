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
} from '@chakra-ui/react'
import { appContent } from '../../ContextApi/ContextApi'


export const UserProfile = () => {

  const { userDetail } = useContext(appContent)

  console.log('userDetails', userDetail)

  return (
    <Menu>
      <MenuButton as={Button} variant={'none'}>
        {/* <WrapItem> */}
          <Avatar size='sm' name={userDetail.name || userDetail.email || `${userDetail.mobile}`} src={''} />
        {/* </WrapItem> */}
      </MenuButton>
      <MenuList>
        <MenuItem>{userDetail.name || userDetail.email || `${userDetail.mobile}`}</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}
