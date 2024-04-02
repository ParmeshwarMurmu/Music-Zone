import React from 'react'
import { useAppSelector } from '../../Redux/Store/Hook'
import { arjitSingSongsIsLoadingValueFromReduxStore } from '../../Redux/ArjitSinghReducer/reducer'

const ArjitSingh = () => {
    const arjitSongs = useAppSelector(arjitSingSongsIsLoadingValueFromReduxStore)
    
  return (
    <div>
      
    </div>
  )
}

export default ArjitSingh
