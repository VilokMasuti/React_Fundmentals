import { useState } from 'react'

const Controlledinput = () => {
  const [text,setText] = useState('')
  return (
    <div className='p-10'>
      <h1 className='title'>Controlled input </h1>

<div className='flex flex-col gap-5'>
  <input
  type='text'
  value={text}
  onChange={(e) =>  setText(e.target.value)}
  placeholder='Type..!'
  className=' mt-7 w-[12rem] border-b  border-0  outline-none text-whit  focus:border-b  focus:outline-none  focus:ring-0'
  />

  <p className='  font-authormt-2 text-sm text-white  font-sans'>
    {text}
  </p>

</div>

    </div>
  )
}

export default Controlledinput
