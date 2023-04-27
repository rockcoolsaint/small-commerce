import React, { useContext } from 'react'
import { ProductsContext } from './ProductsContext'

const Product = ({_id, name, description, price, picture}) => {
  const {setSelectedProducts} = useContext(ProductsContext);

  const addProduct = () => {
    setSelectedProducts(prev => [...prev, _id]);
  }

  return (
    <div className='py-4'>
      <div className='w-64'>
        <div className='bg-blue-100 p-5 rounded-xl'>
          <img src={picture} alt="" />
        </div>
        <div className='mt-2'>
          <h3 className='font-bold text-lg'>{name}</h3>
        </div>
        <p className='text-sm mt-1 leading-4 text-gray-500'>{description}</p>
        <div className='flex mt-1'>
          <div className='text-2xl font-bold grow'>${price}</div>
          <button onClick={addProduct} className='bg-emerald-400 text-white py-1 px-3 rounded-xl'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product