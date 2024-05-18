import React from 'react'

const HostelCard = ({hostel}) => {
  return (
    <div className='h-[200px] flex border w-[650px] m-auto shadow-lg my-4'>
        <div className='w-[40%]'>
            <img className='h-[100%] w-[100%]' src='https://c1.wallpaperflare.com/preview/802/154/558/hostel-youth-hostel.jpg' alt='hostel'/>
        </div>
        <div className='mx-1 flex items-center flex-col font-semibold p-3'>
            <h2 className='text-red-500'>{hostel.NAME}</h2>
            <h3>{hostel.ADDRESS.length>50 ? hostel.ADDRESS.substr(0,50)+'...' : hostel.ADDRESS}</h3>
            <p>{hostel.CATEGORY} Hostel</p>
        </div>
    </div>
  )
}

export default HostelCard