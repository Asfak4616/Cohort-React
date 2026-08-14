import React from 'react'

const ProductsCard = ({product,del}) => {
del()
  return (
    <div className='p-4 border-2 flex flex-col gap-3 rounded'>
      <div className='w-35 '>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.title}</h2>
        <p className='text-xs'>{product.category}</p>
        <p className='text-green-500'>{product.price}</p>
        <button onClick={()=>del(product.id)} className='p-1 bg-red-500 '>Delete</button>
      </div>
    </div>
  )
}

export default ProductsCard
