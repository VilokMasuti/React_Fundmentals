import { useState } from 'react'

const LikeButton = () => {
  const [count ,setCount] = useState(0)
  const handleCount=() => {
    setCount((pre) => pre + 1)
  }

  const handleDisCount = () => {
 setCount((pre) => pre - 1)
  }
  return (
    <div className=' p-10'>
      <h1 className=' title'>
        Like button with count
      </h1>

      <div className=' flex flex-row gap-10 mt-7'>
<button onClick={handleCount} className=' cursor-pointer w-fit px-8 bg-blue-600  font-author rounded-sm shadow-olive-950 shadow-xl'>Like</button>

<button onClick={handleDisCount} className=' cursor-pointer w-fit px-8 bg-blue-600  font-author rounded-sm shadow-olive-950 shadow-xl'>DisLike</button>



<p className=' texau' >How many likes? {count}</p>
      </div>
    </div>
  )
}

export default LikeButton
