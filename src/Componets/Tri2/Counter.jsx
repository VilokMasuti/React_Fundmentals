import { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(0)

  const handleAdd = () => {
    setCount((pre) => pre + 1)
  }
    const handleDel = () => {
      if( count >0) {
  setCount((pre) => pre - 1)
      }

  }
    const handleReset = () => {
    setCount(0)
  }
  return (
    <div className=' p-10 '>
      <h1  className=' text-md '>Counter State</h1>
      <div className='  mt-7 flex flex-col'>

        <h1 className='text-3xl font-author'>Counter  : {count}</h1>

<div className=' mt-7 flex flex-row gap-10'>
  <button onClick={handleAdd} className=' cursor-pointer bg-green-600 px-2.5 rounded-sm'> increment</button>
   <button  onClick={handleDel}  className=' cursor-pointer bg-red-600 px-2.5 rounded-sm'> decrement</button>
      <button onClick={handleReset} className=' cursor-pointer text-black bg-zinc-200 px-2.5 rounded-sm'> reset </button>
</div>
      </div>
    </div>
  )
}

export default Counter
