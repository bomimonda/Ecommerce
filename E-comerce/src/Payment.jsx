import React from 'react'

const Payment = () => {
  return (
    <div className='h-[80vh]  w-[100%] '>
        <h1 className='text-[25px] text-center py-[50px] text-[#CA1515] font-semibold'>Payment Method</h1>
        <div className="methods m-auto flex flex-col gap-y-[10px]  w-[600px]">
          <div className="one flex  items-center justify-between  rounded-[5px]  px-[30px] bg-gray-300">
            <input type="radio" className='h-[25px] w-[25px]'   name="Group1" id="" />
            <p className='text-[25px]'>Jaaz-cash</p>
            <img src="https://iconape.com/wp-content/png_logo_vector/jazz-cash-logo.png" className='h-[100px]' alt=""  />
          </div>
           <div className="one flex  items-center justify-between      px-[30px] bg-gray-300">
            <input type="radio" className='h-[25px] w-[25px]'   name="Group1" id="" />
            <p className='text-[25px]'>Delivery</p>
            <img src="Delivery.png" className='h-[100px]' alt=""  />
          </div>
           <div className="one flex  items-center justify-between    px-[30px] bg-gray-300">
            <input type="radio" className='h-[25px] w-[25px]'   name="Group1" id="" />
            <p className='text-[25px]'>Pay-Pal</p>
            <img src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png" className='h-[100px]' alt=""  />
          </div>
           <div className="one flex  items-center justify-between rounded-[5px]   px-[30px] bg-gray-300">
            <input type="radio" className='h-[25px] w-[25px]'   name="Group1" id="" />
            <p className='text-[25px]'>easy-pasia</p>
            <img src="easy.png" className='h-[100px]' alt=""  />
          </div>
        </div>
      
    </div>
  )
}

export default Payment
