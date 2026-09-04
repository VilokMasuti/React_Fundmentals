
const  TagColour = {
    high : 'bg-red-500',
   medium: 'bg-yellow-500',
   low:'bg-green-500'


  }
const Priority = ({tag}) => {

  return (
    <div className=' p-10'>
      <h1 className=' uppercase antialiased font-author text-3xl  text-neutral-50  border-b  w-fit border-dashed'>
PriorityTag
</h1>

<div className=' flex flex-col sm:flex-row gap-10 mt-7'>

{tag.map((t) => (
  <button className={`${TagColour[t] } rounded-md cursor-pointer  px-2.5`}>
    {t}
  </button>
))}

</div>
    </div>
  )
}

export default Priority
