import { useState } from 'react';

const Error = ({message,show}) => {
  const [toggle,setToggle] = useState(show)

  console.log(toggle);





  return (
    <div className=' p-10'>
      <div className='  '>
<h1 className=' uppercase antialiased font-author text-3xl  text-neutral-50  border-b  w-fit border-dashed'>
 Error Message
</h1>


<button onClick={() => setToggle(!toggle)} className=' mt-3.5  px-5 py-1.5 cursor-pointer  bg-zinc-200 text-black rounded-md   w-fit'>SHOW</button>


{toggle === true && (
  <p className=' text-2xl   mt-7 t-author font-bold  text-white'>
    {message}
  </p>
)}

      </div>




    </div>
  )
}

export default Error
