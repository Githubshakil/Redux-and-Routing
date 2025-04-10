import React from 'react'
import { useSelector } from 'react-redux'

const Five = ({}) => {
 const count = useSelector((state)=> state.count.value)

 return(
  <div>{count}</div>
 )
}

export default Five