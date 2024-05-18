import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHostelsData } from '../../services/api';
import { setCurrentCity } from '../../features/currentCityOrHostel';
import HostelCard from '../HostelCard/HostelCard';

const Hostel = () => {
  const hostelData = useSelector((store) => store.cityOrHostel.currentCity);
  // const [hostelData, setHostelData] = useState([]);
  console.log("hostel data is", hostelData); 
  const dispatch = useDispatch();
  useEffect(()=>{
    dataFetching();
  },[]);
  const dataFetching = async () => {
    try {
      const res = await getHostelsData();
      dispatch(setCurrentCity(res.data));
      console.log('response is ',res);
    } catch (error) {
      console.log("error while fetching data ", error.message);
    }
  }
  return (
    <div>
        {
          hostelData?.map(hostel=>{
            return(
              <div className='w-[80vw] m-auto'>
                  <HostelCard hostel={hostel}/>
              </div>
            )
          })
        }
    </div>
  )
}

export default Hostel