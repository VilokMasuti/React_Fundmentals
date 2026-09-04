
const TRI1ProductCard = ({name, key ,price, isStock ,category }) => {
  return (
    <div className='  p-10'>


<div className= ' font-author text-black w-[20rem]  rounded-md  bg-neutral-200 shadow-2xl  p-2  border-black flex  flex-col gap-2 border-dashed border  text-start ' key={key}>

<h1 className='  text-2xl'>{name}</h1>
<p> ${price}</p>
<p className={`${isStock ? 'bg-green-600' : "  bg-black" } w-[4rem] rounded-md  text-white text-center`}>{isStock ? "YES" : "  NO"}</p>
<p className='  text-xl'>{category}</p>

</div>
    </div>
  )
}

export default TRI1ProductCard
