import { useState } from 'react'
import { TABS } from '../../../lib/Json'
const Tabs = () => {
  const [active,setActive] = useState(0)

  return (
    <div className='p-10 flex flex-col gap-10'>
      <h1 className=' font-author text-2xl antialiased  font-light text-white border-b border-dashed w-fit'>TABS</h1>
<div className=' flex gap-10'>
  {TABS.map((tab,id) => (

 <button onClick={() => setActive(id)} key={id} className={`${active === id ? "border-b border-neutral-50" : ""} cursor-pointer`}>
      {tab.label}
    </button>









  ))}

</div>

 <p className='  text-white'>{TABS[active].content}</p>
    </div>
  )
}

export default Tabs
