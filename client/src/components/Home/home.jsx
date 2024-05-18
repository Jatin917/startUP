import React from 'react'
import { top20CitiesIndia } from '../../data/topCitiesOfIndia'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-[70vw] m-auto flex border flex-wrap p-2 item-center justify-center my-3'>
        {
            top20CitiesIndia?.map((cityObj)=>{
                return(
                    <Link to={`/hostel`} className='cursor-pointer shadow-md rounded flex w-[280px] flex-col items-center justify-center m-2'>
                        <img className='w-[100%]' src={cityObj.imageUrl} alt='img'/>
                        <h3 className='font-semibold mt-3'>{cityObj.city}</h3>
                    </Link>
                );
            })
        }
    </div>
  )
}

export default Home