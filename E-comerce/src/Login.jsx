import React from 'react'
import { setdetail } from './Redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { empetydetail } from './Redux/Reducer'
import { userAdd } from '../Api'
import { useradd1 } from './Redux/Reducer'

const Login = () => {
  let dispatch=useDispatch()
  let State=useSelector((state)=>state.name.Costumer)
  

  function Sub(e) {
    e.preventDefault()
    if (State.Name!==""&&State.Email.includes("@gmail.com")) {
      console.log('Hello');
      
      console.log(State);
    
      dispatch(useradd1(State))

      dispatch(empetydetail())
      
      
    }
    
  }
  
  return (
    <div className='h-[100vh] w-[100%] flex justify-center  items-center'>
 <div className="Message w-[50%] flex flex-col items-center ">
            

              <form  onSubmit={(e)=>{
                Sub(e)
              }} className="flex flex-col  gap-y-[30px]  w-[100%] sm:w-[500px]" action="">
                  <h1 className="text-[22px]   sm:text-[25px] uppercase pb-[40px]  font-semibold">
                Costumer detail
              </h1>
                <input
                  type="text"
                  value={State.Name}
                  onInput={(e)=>{
                    dispatch(
                      setdetail({
                        field:e.target.name,
                        value:e.target.value
                      })

                    )



                  }}
                  className="border-[1px]   rounded-[5px] text-[16px] sm:text-[19px] py-[8px] pl-[20px] w-[100%] sm:pr-[250px] focus:outline-none border-gray-400"
                  placeholder="Name"
                  name="Name"
                  id=""
                />
                <input
                 onInput={(e)=>{
                    dispatch(
                      setdetail({
                        field:e.target.name,
                        value:e.target.value
                      })

                    )



                  }}
                   value={State.Email}
                  type="email"
                  className="border-[1px]   rounded-[5px] text-[16px] sm:text-[19px] py-[8px] pl-[20px]  w-[100%] sm:pr-[250px] focus:outline-none border-gray-400"
                  placeholder="Email"
                  name="Email"
                  id=""
                />

                <textarea
                  name=""
                  placeholder="Write Experience"
                  className="border-[1px]  pt-[10px] pl-[20px] rounded-[5px] text-[16px] sm:text-[19px] h-[150px]  w-[80%] sm:w-[500px] focus:outline-none border-gray-400"
                  id=""
                ></textarea>

                <button type='submit' onClick={()=>{
                
                }} className="sm:text-[17px] text-[14px] rounded-[25px] px-[40px] py-[10px] font-semibold w-[max-content] text-white bg-[#CA1515]">
                  SEND MESSAGE
                </button>
              </form>
            </div>
         

      
    </div>
  )
}

export default Login
