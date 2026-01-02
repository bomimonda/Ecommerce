import React, { useState } from 'react'
import { userget } from './Api'
import { useEffect } from 'react'
import Payment from './src/payment'
import Login from './src/Login'
import { useSelector } from 'react-redux'

const UserData = () => {
  let Costumer=useSelector((state)=>state.name.Usercheck)
  console.log("Costumer");
  console.log(Costumer);
  
  
    let [see,setsee]=useState([])

   async function User() {
        let res=await userget()
        console.log(res);
        setsee(res.data)
        
    }

    useEffect(() => {
       User()
    
      return () => {
       
      }
    }, [])
    
  return (
    <div>
        {Costumer==false?<Login/>:<Payment/>}
      
    </div>
  )
}

export default UserData
