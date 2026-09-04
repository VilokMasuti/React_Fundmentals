
const StatCard = ({label,value}


) => {


  return (
    <div className=' p-10'>

<div className=' bg-stone-100 px-2.5  w-fit text-black rounded-sm   '>
  <div className='font-author flex gap-10'>
<h1>
  Age:{label}
  </h1>
<p>
  Active User:{value}
  </p>
  </div>

</div>
      </div>
  )
}

export default StatCard
