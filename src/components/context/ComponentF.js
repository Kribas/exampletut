import React from 'react'
import { useContext } from 'react'
import { LastNameContext, UserContext } from '../../App'


export default function ComponentF() {
  
  const user = useContext(UserContext)
  const lastName = useContext(LastNameContext)

  return (
    <>
      {user} - {lastName}
    </>
  )
}
