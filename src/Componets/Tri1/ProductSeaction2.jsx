import { products } from '../../../lib/Json'
import Tri1ProductList from './Tri1ProductList'

const ProductSeaction2 = () => {
  return (
     <div className=" p-10 ">
    <h1 className=' uppercase antialiased font-author text-3xl  text-neutral-50  border-b  w-fit border-dashed'>
  Product Cards - ARRAYPROP
</h1>

<article className='  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>

  {products.map((p) => (

    <Tri1ProductList
    key={p.id}
    pro={p}
    />
  ))}


</article>

    </div>
  )
}

export default ProductSeaction2
