import { useState } from 'react'
import { TABS } from '../../../lib/Json'

const Tabs = () => {
  const [active,setActive] = useState(0)
  return (
    <div className='p-10 flex flex-col gap-10'>
      <h1 className=' font-author text-2xl antialiased  font-light text-white border-b border-dashed w-fit'>TABS</h1>

<article className=' flex gap-20'>

{TABS.map((tab,id) =>(
  <button onClick={() => setActive(id)} key={id} className={` ${active === id ? "border-b border-b-amber-50" : ""} font-sans cursor-pointer  uppercase antialiased`}>
{tab.label}
  </button>
))}
</article>

<div>
  {TABS[active].content}
</div>
    </div>
  )
}

export default Tabs
