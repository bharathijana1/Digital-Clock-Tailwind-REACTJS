import React, { useEffect, useState } from 'react'


const UseEffectLearning = () => {
    const [ count, setCount ] = useState(0);
    const [time, setTime ] = useState(0)   

    // state dependencies
    // useEffect(() => {
    //     console.log("hello, i am state dependency. it will run one time when the code is remder after that also when the state is changed");
    //     console.log(count);
    // }, [count])

    // empty dependancies
    // useEffect(() => {
    //   console.log("Hello, i am empty dependency. it will run one time when the code is render, first it returns return statement and useeffect content");
    // },[])

    // no dependencies
    // useEffect(()=> {
    //   console.log("hello, i am no dependency it will run every time when the code is changed somewhere");
    // })
    
    // clean up code
    // useEffect(()=>{
    //   console.log("hello, i am clean up code");
    //   return(()=> console.log("cleaned, 1st time print the console, after return state but when the state is changed first return statement is run after only console statement is ran this is called clean up code"))
    // },[time])

    useEffect(()=>{
      const random = Math.floor(Math.random() * 1000);
      const timer = setInterval(() => {
        console.log(`${random} - re-render`);
      }, 1000)
      return ()=> clearInterval(timer);
    },[count])


  return (
    <div className=''>
        <h1 className='py-2 text-lg'>count: {count}</h1>
        <h1 className='py-2 text-lg'>Time: {time}</h1>
        <div className='flex gap-2'>
        <button className='border p-2 text-xl font-bold bg-gray-300' onClick={() => setCount((val) => val+1)}>+</button>
        <button className='border p-2 text-xl font-bold bg-gray-300'  onClick={() => setCount((val) => val-1)}>-</button>
        <button className='border p-2 text-xl font-bold bg-gray-300'  onClick={() => setTime((val) => val+1)}>Time </button>
        </div>
      
    </div>
  )
}

export default UseEffectLearning