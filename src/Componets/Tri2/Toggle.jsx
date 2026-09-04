import { useState } from 'react'

const Toggle = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className=' p-10'>

      <h1 className=' antialiased font-sans'>
        Toggle Management
      </h1>

      <div className=' m-7 flex flex-col'>


<button onClick={() => setToggle(!toggle)} className={` ${toggle === true ? " bg-white text-black" : " bg-zinc-800 "}  px-5 border-b-gray-950  text-xl shadow-md cursor-pointer  w-fit rounded-md `}>
  { toggle === true ? "Show" : " Hide"}
</button>

{toggle === true && (
<p className=' mt-7 font-author   uppercase'>
  a button that switches between "Show" and "Hide" and shows/hides a paragraph of text.
</p>

)}

      </div>
    </div>
  )
}

export default Toggle
