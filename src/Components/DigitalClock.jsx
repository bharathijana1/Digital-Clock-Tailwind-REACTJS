import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [currentTime, setCurrentTime ] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000)
        return ()=> clearInterval(timer);
    },[])

    const formatTimeWithLeadingZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    const formatHour = (hour)=>{
        return hour === 0 ? 12 : hour > 12 ? hour-12 : hour
    }
    const formatDate = (date) => {
        const options = { weekday: "long", year:"numeric", month: "long", day: "numeric"};
        return date.toLocaleDateString(undefined, options);
    }

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-sky-950 gap-6'>
        <div className='bg-white p-5 w-full md:w-3/4 lg:w-1/2 xl:w-1/4'>
        <h1 className='text-center p-2 my-3 font-semibold text-3xl text-sky-700'>Digital Clock</h1>
    <div className='flex flex-col justify-center items-center text-2xl'>
        
        <div className='flex flex-col justify-center items-center gap-2 font-medium'> 
            <h1>{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}H :
                {formatTimeWithLeadingZero(currentTime.getMinutes())}M : 
                {formatTimeWithLeadingZero(currentTime.getSeconds())}S 
                {currentTime.getHours() >= 12 ? " PM" : " AM"}
                </h1>
            <h1 className='text-gray-500'>{formatDate(currentTime)}</h1>
        </div>
    </div>
        </div>
    </div>
    
  )
}

export default DigitalClock
