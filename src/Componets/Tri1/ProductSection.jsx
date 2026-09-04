import { products } from '../../../lib/Json'
import TRI1ProductCard from './TRI1ProductCard'

const ProductSection = () => {
  return (
     <div className=" p-10 ">
    <h1 className=' uppercase antialiased font-author text-3xl  text-neutral-50  border-b  w-fit border-dashed'>
  Product Cards
</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <TRI1ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            category ={product.category}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSection
