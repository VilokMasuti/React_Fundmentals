
const Tri1ProductList = ({key,pro}) => {

  return (
    <div className='  p-10'>


<div className= ' font-author text-black w-[20rem]  rounded-md  bg-stone-500 shadow-2xl  p-2  border-black flex  flex-col gap-2 border-dashed border  text-start ' key={key}>

<h1 className='  text-2xl'>{pro.name}</h1>
<p> ${pro.price}</p>
<p className={`${pro.isStock ? 'bg-green-600' : "  bg-black" } w-[4rem] rounded-md  text-white text-center`}>{pro.isStock ? "YES" : "  NO"}</p>
<p className='  text-xl'>{pro.category}</p>

</div>
    </div>
  )
}

export default Tri1ProductList
